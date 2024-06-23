import { Transaction } from "@/app/utils/Interfaces";
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
  navigation,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    const transactions = transactionsInput.sort((a, b) =>
      new Date(a.fullDate) < new Date(b.fullDate) ? 1 : -1
    );

    setTransactions(transactions);
  }, [transactionsInput]);

  return (
    <ScrollView>
      {transactions.map((transaction, index) => (
        <View key={"dailyExpense" + index}>
          {(index === 0 ||
            new Date(transaction.fullDate).getDate() !=
              new Date(transactions[index - 1].fullDate).getDate()) && (
            <View>
              {index !== 0 && <Separator />}
              <OneSummaryRow
                periodName={`${new Date(
                  transaction.fullDate
                ).getDate()} ${convertNumberToWeekDay(
                  new Date(transaction.fullDate).getDay()
                )}`}
                totalIncome={transactions
                  .filter(
                    (t) =>
                      new Date(t.fullDate).getDate() ===
                        new Date(transaction.fullDate).getDate() &&
                      t.type === "income"
                  )
                  .reduce((a, b) => a + b.amount, 0)}
                totalExpense={transactions
                  .filter(
                    (t) =>
                      new Date(t.fullDate).getDate() ===
                        new Date(transaction.fullDate).getDate() &&
                      t.type === "expense"
                  )
                  .reduce((a, b) => a + b.amount, 0)}
              />
              <Separator />
            </View>
          )}
          <Pressable
            onPress={() => {
              navigation.navigate("FullScreenTransaction", {
                transaction: {
                  ...transaction,
                  fullDate: transaction.fullDate.toDateString(),
                },
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
