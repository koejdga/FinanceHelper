import { Transaction } from "@/app/utils/ServerCommunication";
import { convertNumberToWeekDay } from "@/app/utils/Utils";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Separator from "../Separator";
import OneExpenseRow from "./OneExpenseRow";
import OneSummaryRow from "./OneSummaryRow";

type Props = {
  transactions: Transaction[];
};

const DailyExpensesHistory: React.FC<Props> = ({
  transactions: transactionsInput,
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
          {(index == 0 || transaction.date != transactions[index - 1].date) && (
            <View>
              <OneSummaryRow
                periodName={`${transaction.date} ${convertNumberToWeekDay(
                  transaction.dayOfWeek
                )}`}
                totalIncome={14}
                totalExpense={15}
              />
              <Separator />
            </View>
          )}
          <OneExpenseRow
            name={transaction.category}
            typeOfCard={transaction.account}
            amountOfMoney={transaction.amount}
            isIncome={transaction.type === "income"}
          />
        </View>
      ))}
      <Separator />
    </ScrollView>
  );
};

export default DailyExpensesHistory;
