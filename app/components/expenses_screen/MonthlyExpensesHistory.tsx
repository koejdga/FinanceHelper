import { View, Text } from "react-native";
import React from "react";
import OneSummaryRow from "./OneSummaryRow";
import { convertNumberToMonthName } from "../../utils/Utils";
import Separator from "../Separator";

type Props = {
  monthNumber: number;
  income: number;
  expense: number;
};

const MonthlyExpensesHistory: React.FC<Props> = ({
  monthNumber,
  income,
  expense,
}) => {
  if (income < 0) {
    return <Text>Sorry, negative income provided</Text>;
  }

  if (expense < 0) {
    return <Text>Sorry, negative expense provided</Text>;
  }

  return (
    <View>
      <OneSummaryRow
        periodName={convertNumberToMonthName(monthNumber)}
        totalIncome={income}
        totalExpense={expense}
      />
      <Separator />
    </View>
  );
};

export default MonthlyExpensesHistory;
