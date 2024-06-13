import { useState } from "react";
import { SafeAreaView } from "react-native";
import AddTransactionButton from "../components/AddTransactionButton";
import ChooseOneOptionButtons, {
  TransactionTabsOptions,
} from "../components/ChooseOneOptionButtons";
import Separator from "../components/Separator";
import DailyExpensesHistory from "../components/expenses_screen/DailyExpensesHistory";
import HeaderWithMonthOrYear from "../components/expenses_screen/HeaderWithMonthOrYear";
import IncomeExpenseTotal from "../components/expenses_screen/IncomeExpenseTotal";
import MonthlyExpensesHistory from "../components/expenses_screen/MonthlyExpensesHistory";
import { Accent } from "../constants/Colors";
import { FontNames, Fonts } from "../constants/Fonts";
import Limits from "./Limits";
import Statistics from "./Statistics";

const TransactionTabs = ({ navigation }) => {
  const [selected, setSelected] = useState<string>(
    TransactionTabsOptions.LIMITS.toString()
  );

  const [monthNumber, setMonthNumber] = useState(4);
  const [year, setYear] = useState(2024);

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <HeaderWithMonthOrYear
        monthNumber={monthNumber}
        setMonthNumber={setMonthNumber}
        year={year}
        setYear={setYear}
        showOnlyYear={selected === TransactionTabsOptions.MONTHLY.toString()}
      />
      <Separator />

      <ChooseOneOptionButtons
        selected={selected}
        setSelected={setSelected}
        enumeration={TransactionTabsOptions}
        style={{ marginBottom: 8, paddingTop: 15 }}
        indicatorStyle={{
          height: 5,
          backgroundColor: Accent[100],
          borderRadius: 2.5,
          position: "absolute",
          bottom: -5,
        }}
        indicatorPaddingHorizontal={2.5}
        textStyle={[Fonts[FontNames.BODY_2]]}
      />

      <Separator />

      {(selected === TransactionTabsOptions.DAILY.toString() ||
        selected === TransactionTabsOptions.MONTHLY.toString()) && (
        <>
          <IncomeExpenseTotal income={15500} expense={4878.5} />
          <Separator />
        </>
      )}

      {selected === TransactionTabsOptions.DAILY.toString() && (
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

      {selected === TransactionTabsOptions.MONTHLY.toString() && (
        <MonthlyExpensesHistory
          monthNumber={4}
          income={15500}
          expense={4878.5}
        />
      )}

      {selected === TransactionTabsOptions.LIMITS.toString() && <Limits />}

      {selected === TransactionTabsOptions.STATISTICS.toString() && (
        <Statistics />
      )}

      <AddTransactionButton
        onPress={() => {
          navigation.navigate("AddTransactionForm");
        }}
      />
    </SafeAreaView>
  );
};

export default TransactionTabs;
