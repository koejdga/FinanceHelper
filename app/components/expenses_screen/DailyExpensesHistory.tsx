import { ScrollView, Text, View } from "react-native";
import { ExpenseRed, IncomeBlue } from "../../constants/Colors";
import { FontNames, Fonts } from "../../constants/Fonts";
import Separator from "../Separator";
import OneExpenseRow from "./OneExpenseRow";
import { convertNumberToMoney } from "../../utils/Utils";
import OneSummaryRow from "./OneSummaryRow";

type Expense = {
  name: string;
  typeOfCard: string;
  amountOfMoneyUAH: number;
  isIncome: boolean;
};

type Props = {
  date: Date;
  expenses: Expense[];
};

const DailyExpensesHistory: React.FC<Props> = ({ date, expenses }) => {
  const totalIncome = expenses.reduce(
    (a, b) => a + (b.isIncome ? b.amountOfMoneyUAH : 0),
    0
  );

  const totalExpense = expenses.reduce(
    (a, b) => a + (!b.isIncome ? b.amountOfMoneyUAH : 0),
    0
  );

  return (
    <ScrollView>
      <OneSummaryRow
        periodName={`${date.getDate()} ${date.toLocaleDateString("en-US", {
          weekday: "short",
        })}`}
        totalIncome={totalIncome}
        totalExpense={totalExpense}
      />
      <Separator />
      {expenses.map((expense, index) => (
        <OneExpenseRow
          name={expense.name}
          typeOfCard={expense.typeOfCard}
          amountOfMoney={expense.amountOfMoneyUAH}
          isIncome={expense.isIncome}
          key={"dailyExpense" + index}
        />
      ))}
      <Separator />
    </ScrollView>
  );
};

export default DailyExpensesHistory;
