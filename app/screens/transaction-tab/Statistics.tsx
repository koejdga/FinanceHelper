import CustomBarChart from "@/app/components/expenses-screen/CustomBarChart";
import CustomLineGraph from "@/app/components/expenses-screen/CustomLineGraph";
import { Category } from "@/app/utils/Interfaces";
import {
  convertNumberToMonthName,
  convertNumberToWeekDay,
} from "@/app/utils/Utils";
import { getAllExpenseCategoriesByDate } from "@/app/utils/server-communication/CategoryRequests";
import { getAllTransactions } from "@/app/utils/server-communication/TransactionRequests";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

const Statistics = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [dateExpenses, setDateExpenses] = useState<object>({ "1": 1 });
  const [weekdayExpenses, setWeekdayExpenses] = useState<object>({ "1": 1 });
  const isFocused = useIsFocused();

  useEffect(() => {
    const init = async () => {
      const resCategories = await getAllExpenseCategoriesByDate(6, 2024);
      const categories = [
        ...resCategories.categoriesWithLimits,
        ...resCategories.categoriesWithoutLimits,
      ];

      const sortedCategories = categories.sort((a: Category, b: Category) => {
        return a.currentExpense > b.currentExpense ? -1 : 1;
      });
      setCategories(sortedCategories);

      const resTransactions = await getAllTransactions(
        new Date().getMonth(),
        new Date().getFullYear()
      );
      const dateExpenses = {};
      resTransactions.transactions.forEach((tr) => {
        if (tr.type === "income") {
          return;
        }

        const formatedDate = tr.fullDate
          .toLocaleDateString("uk-UA")
          .slice(0, -5);
        if (formatedDate in dateExpenses) {
          dateExpenses[formatedDate] += tr.amount;
        } else {
          dateExpenses[formatedDate] = tr.amount;
        }
      });

      const sorted = Object.entries(dateExpenses).sort(([key1], [key2]) =>
        key1.localeCompare(key2)
      );
      const sortedDict = Object.fromEntries(sorted);
      setDateExpenses(sortedDict);

      const weekdayExpenses = {};
      resTransactions.transactions.forEach((tr) => {
        if (tr.type === "income") {
          return;
        }
        const weekday = tr.fullDate.getDay();
        if (weekday in weekdayExpenses) {
          weekdayExpenses[weekday] += tr.amount;
        } else {
          weekdayExpenses[weekday] = tr.amount;
        }
      });

      for (let i = 0; i < 7; i++) {
        if (!(i in weekdayExpenses)) {
          weekdayExpenses[i] = 0;
        }
      }

      const sortedWeekdays = Object.entries(weekdayExpenses).sort(
        ([key1], [key2]) => (parseInt(key1) < parseInt(key2) ? -1 : 1)
      );
      const sortedDictWeekdays = Object.fromEntries(sortedWeekdays);
      setWeekdayExpenses(sortedDictWeekdays);
    };
    init();
  }, [isFocused]);

  return (
    <ScrollView>
      <CustomLineGraph
        labels={Object.keys(dateExpenses)}
        values={Object.values(dateExpenses)}
        legend="Expenses by Day"
      />
      <CustomBarChart
        labels={Object.keys(weekdayExpenses).map((num) =>
          convertNumberToWeekDay(parseInt(num))
        )}
        values={Object.values(weekdayExpenses)}
        legend="Expenses by Weekday"
      />
      <CustomBarChart
        labels={categories.map((c) => c.categoryName)}
        values={categories.map((c) => c.currentExpense)}
        legend="Category Expenses"
      />
      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
};

export default Statistics;
