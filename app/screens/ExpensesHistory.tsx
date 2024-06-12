import { Pressable, SafeAreaView, Text } from "react-native";
import DailyMonthlyLimitsButtons, {
  Options,
} from "../components/expenses_screen/DailyMonthlyLimitsButtons";
import HeaderWithMonthOrYear from "../components/expenses_screen/HeaderWithMonthOrYear";
import IncomeExpenseTotal from "../components/expenses_screen/IncomeExpenseTotal";
import MonthlyExpensesHistory from "../components/expenses_screen/MonthlyExpensesHistory";
import Separator from "../components/Separator";
import { useState } from "react";
import DailyExpensesHistory from "../components/expenses_screen/DailyExpensesHistory";
import Limits from "./Limits";
import AddIcon from "../components/icons/AddIcon";
import { Accent, base } from "../constants/Colors";
import Statistics from "./Statistics";

const ExpensesHistory = () => {
  const [selected, setSelected] = useState(Options.LIMITS);
  const [monthNumber, setMonthNumber] = useState(4);
  const [year, setYear] = useState(2024);

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <HeaderWithMonthOrYear
        monthNumber={monthNumber}
        setMonthNumber={setMonthNumber}
        year={year}
        setYear={setYear}
        showOnlyYear={selected === Options.MONTHLY}
      />
      <Separator />

      <DailyMonthlyLimitsButtons
        selected={selected}
        setSelected={setSelected}
      />
      <Separator />

      {(selected === Options.DAILY || selected === Options.MONTHLY) && (
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

      {selected === Options.LIMITS && <Limits />}

      {selected === Options.STATISTICS && <Statistics />}

      <Pressable
        style={{
          position: "absolute",
          bottom: 7,
          right: 7,
          backgroundColor: Accent[100],
          width: 71,
          aspectRatio: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 35.5,
          zIndex: 10,
        }}
      >
        <AddIcon tintColor={base.light.light80} size={50} />
      </Pressable>
    </SafeAreaView>
  );
};

export default ExpensesHistory;
