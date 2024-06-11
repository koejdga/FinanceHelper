import { SafeAreaView } from "react-native";
import DailyMonthlyLimitsButtons, {
  Options,
} from "../components/expenses_screen/DailyMonthlyLimitsButtons";
import HeaderWithMonthOrYear from "../components/expenses_screen/HeaderWithMonthOrYear";
import IncomeExpenseTotal from "../components/expenses_screen/IncomeExpenseTotal";
import MonthlyExpensesHistory from "../components/expenses_screen/MonthlyExpensesHistory";
import Separator from "../components/Separator";
import { useState } from "react";
import DailyExpensesHistory from "../components/expenses_screen/DailyExpensesHistory";

const ExpensesHistory = () => {
  const [selected, setSelected] = useState(Options.DAILY);

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <HeaderWithMonthOrYear
        monthNumber={4}
        year={2024}
        showOnlyYear={selected === Options.MONTHLY}
      />
      <Separator />

      <DailyMonthlyLimitsButtons
        selected={selected}
        setSelected={setSelected}
      />
      <Separator />

      {selected !== Options.LIMITS && (
        <>
          <IncomeExpenseTotal income={15500} expense={4878.5} />
          <Separator />
        </>
      )}

      {selected === Options.DAILY && (
        <DailyExpensesHistory
          date={new Date()}
          expenses={[
            {
              name: "Food",
              typeOfCard: "Cash",
              amountOfMoneyUAH: 113,
              isIncome: false,
            },
            {
              name: "Food",
              typeOfCard: "Cash",
              amountOfMoneyUAH: 112,
              isIncome: false,
            },
          ]}
        />
      )}

      {selected === Options.MONTHLY && (
        <MonthlyExpensesHistory
          monthNumber={4}
          income={15500}
          expense={4878.5}
        />
      )}
    </SafeAreaView>
  );
};

export default ExpensesHistory;
