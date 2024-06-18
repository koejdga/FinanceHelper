import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import OneSummaryRow from "./OneSummaryRow";
import { convertNumberToMonthName } from "../../utils/Utils";
import Separator from "../Separator";
import { getAllMonthSummaries } from "@/app/utils/ServerCommunication";
import IncomeExpenseTotal from "./IncomeExpenseTotal";

type Props = {
  year: number;
};

export interface MonthSummary {
  expenseTotal: number;
  incomeTotal: number;
  month: number;
}

const MonthlyExpensesHistory: React.FC<Props> = ({ year }) => {
  const [yearInfo, setYearInfo] = useState<{
    expenseTotal: number;
    incomeTotal: number;
    total: number;
  }>();
  const [monthSummaries, setMonthSummaries] = useState<MonthSummary[]>([]);

  useEffect(() => {
    const init = async () => {
      const res = await getAllMonthSummaries(year);
      setYearInfo(res.yearInfo);
      setMonthSummaries(res.monthSummaries);
    };

    init();
  }, [year]);

  if (year > new Date().getFullYear()) {
    return <Text>Sorry, future year provided</Text>;
  }

  return (
    <View>
      <IncomeExpenseTotal
        income={yearInfo?.expenseTotal || 0}
        expense={yearInfo?.incomeTotal || 0}
      />
      <Separator />
      {monthSummaries.map((monthSummary, index) => (
        <View key={"oneRowInMonthlyExpenses" + index}>
          <OneSummaryRow
            periodName={convertNumberToMonthName(monthSummary.month - 1)}
            totalIncome={monthSummary.incomeTotal}
            totalExpense={monthSummary.expenseTotal}
          />
          <Separator />
        </View>
      ))}
    </View>
  );
};

export default MonthlyExpensesHistory;
