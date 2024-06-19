import DeleteIcon from "@/app/components/icons/DeleteIcon";
import EditIcon from "@/app/components/icons/EditIcon";
import { ExpenseDark, IncomeDark, base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { convertNumberToMoney } from "@/app/utils/Utils";
import { Alert, Pressable, Text, View } from "react-native";
import { deleteTransaction } from "@/app/utils/server-communication/TransactionRequests";
import { Transaction } from "@/app/utils/Interfaces";

const FullScreenTransaction = ({ route, navigation }) => {
  const transaction = route.params?.transaction as Transaction;
  const month = route.params?.month as number;
  const year = route.params?.year as number;
  const date = new Date(year, month, transaction.date);

  const edit = () => {
    navigation.navigate("EditExpenseForm", {
      transaction: transaction,
      month: month,
      year: year,
    });
  };

  const deleteFunction = async () => {
    console.log(transaction.type);
    const deleted = await deleteTransaction(
      transaction.id,
      transaction.type === "income"
    );
    if (deleted) {
      navigation.navigate("TransactionTabs");
    }
  };

  return (
    <View style={{ margin: 16, gap: 16 }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={[Fonts[FontNames.TITLE_3], { flex: 1 }]}>Date</Text>
        <Text style={[Fonts[FontNames.BODY_3], { flex: 1 }]}>
          {date.toLocaleDateString("uk-UA")}
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={[Fonts[FontNames.TITLE_3], { flex: 1 }]}>Amount</Text>
        <Text
          style={[
            Fonts[FontNames.BODY_3],
            {
              flex: 1,
              color: transaction.type === "expense" ? ExpenseDark : IncomeDark,
            },
          ]}
        >
          {convertNumberToMoney(
            transaction.amount * (transaction.type === "expense" ? -1 : 1)
          )}
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={[Fonts[FontNames.TITLE_3], { flex: 1 }]}>Account</Text>
        <Text style={[Fonts[FontNames.BODY_3], { flex: 1 }]}>
          {transaction.account}
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={[Fonts[FontNames.TITLE_3], { flex: 1 }]}>Category</Text>
        <Text style={[Fonts[FontNames.BODY_3], { flex: 1 }]}>
          {transaction.category}
        </Text>
      </View>

      <Pressable
        onPress={edit}
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <EditIcon />
        <Text style={[Fonts[FontNames.BODY_4], { color: base.light.light40 }]}>
          edit transaction
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          Alert.alert(
            "Delete Transaction",
            "Are you sure you want to delete this transaction",
            [
              {
                text: "Yes",
                onPress: deleteFunction,
              },
              { text: "No", style: "cancel" },
            ]
          );
        }}
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <DeleteIcon tintColor={"red"} />
        <Text style={[Fonts[FontNames.BODY_4], { color: base.light.light40 }]}>
          delete transaction
        </Text>
      </Pressable>
    </View>
  );
};

export default FullScreenTransaction;
