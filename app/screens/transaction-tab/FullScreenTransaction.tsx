import DeleteIcon from "@/app/components/icons/DeleteIcon";
import EditIcon from "@/app/components/icons/EditIcon";
import { ExpenseDark, IncomeDark, base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { convertNumberToMoney } from "@/app/utils/Utils";
import { Alert, Pressable, Text, View } from "react-native";
import { deleteTransaction } from "@/app/utils/server-communication/TransactionRequests";
import { Transaction } from "@/app/utils/Interfaces";
import { useContext } from "react";
import { SettingsContext } from "@/app/enums_and_contexts/EnumsAndContexts";

const FullScreenTransaction = ({ route, navigation }) => {
  const transaction = route.params?.transaction as Transaction;
  const { currency, allCurrencies } = useContext(SettingsContext);

  const edit = () => {
    if (transaction.type === "expense") {
      navigation.navigate("EditExpenseForm", {
        transaction: transaction,
      });
    } else {
      navigation.navigate("EditIncomeForm", {
        transaction: transaction,
      });
    }
  };

  const deleteFunction = async () => {
    const deleted = await deleteTransaction(
      transaction.id,
      transaction.type === "income"
    );
    if (deleted === true) {
      navigation.navigate("TransactionTabs");
    } else {
      const errorMessage = deleted as string;
      Alert.alert("Error", errorMessage, [{ text: "OK" }]);
    }
  };

  return (
    <View style={{ margin: 16, gap: 16 }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={[Fonts[FontNames.TITLE_3], { flex: 1 }]}>Date</Text>
        <Text style={[Fonts[FontNames.BODY_3], { flex: 1 }]}>
          {new Date(transaction.fullDate).toLocaleDateString("uk-UA")}
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
            transaction.amount * (transaction.type === "expense" ? -1 : 1),
            currency,
            allCurrencies
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
