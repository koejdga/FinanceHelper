import CustomBarChart from "@/app/components/expenses-screen/CustomBarChart";
import { Category } from "@/app/utils/Interfaces";
import { getAllExpenseCategoriesByDate } from "@/app/utils/server-communication/CategoryRequests";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

const Statistics = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const init = async () => {
      const res = await getAllExpenseCategoriesByDate(6, 2024);
      const categories = [
        ...res.categoriesWithLimits,
        ...res.categoriesWithoutLimits,
      ];

      const sortedCategories = categories.sort((a: Category, b: Category) => {
        return a.currentExpense > b.currentExpense ? -1 : 1;
      });
      setCategories(sortedCategories);
    };
    init();
  }, [isFocused]);

  return (
    <ScrollView>
      {/* <CustomLineGraph
        labels={categories.map((c) => c.categoryName)}
        values={categories.map((c) => c.currentExpense)}
        legend="Expenses"
      /> */}
      <CustomBarChart
        labels={categories.map((c) => c.categoryName)}
        values={categories.map((c) => c.currentExpense)}
        legend="Category Expenses"
      />
    </ScrollView>
  );
};

export default Statistics;
