import Separator from "@/app/components/Separator";
import AddTransactionButton from "@/app/components/buttons/AddTransactionButton";
import ChooseOneOptionButtons, {
  TransactionTabsOptions,
} from "@/app/components/choose-one-option-buttons/ChooseOneOptionButtons";
import DailyExpensesHistory from "@/app/components/expenses-screen/DailyExpensesHistory";
import HeaderWithMonthOrYear from "@/app/components/expenses-screen/HeaderWithMonthOrYear";
import IncomeExpenseTotal from "@/app/components/expenses-screen/IncomeExpenseTotal";
import MonthlyExpensesHistory from "@/app/components/expenses-screen/MonthlyExpensesHistory";
import { Accent } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { Transaction } from "@/app/utils/Interfaces";
import { getAllTransactions } from "@/app/utils/server-communication/TransactionRequests";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import Limits from "./Limits";
import Statistics from "./Statistics";

const TransactionTabs = ({ navigation }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [amountIncome, setAmountIncome] = useState<number>(0);
  const [amountExpense, setAmountExpense] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const isFocused = useIsFocused();

  const [monthNumber, setMonthNumber] = useState(5);
  const [year, setYear] = useState(2024);

  const [selected, setSelected] = useState<string>(
    TransactionTabsOptions.LIMITS.toString()
  );

  useEffect(() => {
    const init = async () => {
      const transactionsInfo = await getAllTransactions(monthNumber, year);
      setTransactions(transactionsInfo.transactions);
      setAmountIncome(transactionsInfo.amountIncome);
      setAmountExpense(transactionsInfo.amountExpense);
      setTotal(transactionsInfo.total);
    };

    if (isFocused) init();
  }, [isFocused, monthNumber]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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

      {selected === TransactionTabsOptions.DAILY.toString() && (
        <>
          <IncomeExpenseTotal
            income={amountIncome}
            expense={amountExpense}
            total={total}
          />
          <Separator />
        </>
      )}

      {selected === TransactionTabsOptions.DAILY.toString() && (
        <DailyExpensesHistory
          transactions={transactions}
          navigation={navigation}
          month={monthNumber}
          year={year}
        />
      )}

      {selected === TransactionTabsOptions.MONTHLY.toString() && (
        <MonthlyExpensesHistory year={2024} />
      )}

      {selected === TransactionTabsOptions.LIMITS.toString() && (
        <Limits navigation={navigation} month={monthNumber} year={year} />
      )}

      {selected === TransactionTabsOptions.STATISTICS.toString() && (
        <Statistics />
      )}

      <AddTransactionButton
        onPress={async () => {
          navigation.navigate("FormGeneral");
        }}
      />
    </SafeAreaView>
  );
};

export default TransactionTabs;
