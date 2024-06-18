import { Transaction } from "@/app/utils/ServerCommunication";
import { convertNumberToWeekDay } from "@/app/utils/Utils";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import Separator from "../Separator";
import OneExpenseRow from "./OneExpenseRow";
import OneSummaryRow from "./OneSummaryRow";

type Props = {
  transactions: Transaction[];
  month: number;
  year: number;
  navigation: any;
};

const DailyExpensesHistory: React.FC<Props> = ({
  transactions: transactionsInput,
  month,
  year,
  navigation,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    const transactions = transactionsInput.sort((a, b) =>
      a.date < b.date ? 1 : -1
    );
    setTransactions(transactions);
  }, [transactionsInput]);

  return (
    <ScrollView>
      {transactions.map((transaction, index) => (
        <View key={"dailyExpense" + index}>
          {(index === 0 ||
            transaction.date != transactions[index - 1].date) && (
            <View>
              {index !== 0 && <Separator />}
              <OneSummaryRow
                periodName={`${transaction.date} ${convertNumberToWeekDay(
                  transaction.dayOfWeek
                )}`}
                totalIncome={transactions
                  .filter(
                    (t) => t.date === transaction.date && t.type === "income"
                  )
                  .reduce((a, b) => a + b.amount, 0)}
                totalExpense={transactions
                  .filter(
                    (t) => t.date === transaction.date && t.type === "expense"
                  )
                  .reduce((a, b) => a + b.amount, 0)}
              />
              <Separator />
            </View>
          )}
          <Pressable
            onPress={() => {
              navigation.navigate("FullScreenTransaction", {
                transaction: transaction,
                month: month,
                year: year,
              });
            }}
          >
            <OneExpenseRow
              name={transaction.category}
              typeOfCard={transaction.account}
              amountOfMoney={transaction.amount}
              isIncome={transaction.type === "income"}
            />
          </Pressable>
        </View>
      ))}
      <Separator />
    </ScrollView>
  );
};

export default DailyExpensesHistory;
