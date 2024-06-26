import Separator from "@/app/components/Separator";
import IncomeExpenseTotal from "@/app/components/expenses-screen/IncomeExpenseTotal";
import AddIcon from "@/app/components/icons/AddIcon";
import CancelIcon from "@/app/components/icons/CancelIcon";
import EditIcon from "@/app/components/icons/EditIcon";
import OneCardRow from "@/app/components/one-row/OneCardRow";
import { base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { Account } from "@/app/utils/Interfaces";
import {
  deleteAccount,
  getAllAccounts,
} from "@/app/utils/server-communication/AccountRequests";
import { useIsFocused, useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

const Accounts = ({ navigation }) => {
  const { dark } = useTheme();
  const [editMode, setEditMode] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>();

  const isFocused = useIsFocused();

  useEffect(() => {
    const init = async () => {
      const accounts = await getAllAccounts();
      setAccounts(accounts);
    };

    setEditMode(false);
    init();
  }, [isFocused]);

  const askAboutDeletion = async (account: Account) => {
    Alert.alert(
      `Delete ${account.name}`,
      `Are you sure you want to delete ${account.name}`,
      [
        {
          text: "Yes",
          onPress: async () => await deleteFunction(account),
        },
        { text: "No", style: "cancel" },
      ]
    );
  };

  const deleteFunction = async (account: Account) => {
    const deleted = await deleteAccount(account.id);
    if (deleted === true) {
      setAccounts(accounts.filter((a) => a.id !== account.id));
      setEditMode(false);
    } else {
      const errorMessage = deleted as string;
      Alert.alert("Error", errorMessage, [{ text: "OK" }]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        onPress={() => setEditMode(false)}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          marginTop: 3,
          marginBottom: 5,
        }}
      >
        <Text
          style={[
            Fonts[FontNames.TITLE_2],
            { color: dark ? base.light.light80 : base.dark.dark100 },
          ]}
        >
          Accounts
        </Text>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            right: 15,
            gap: 5,
          }}
        >
          <Pressable onPress={() => setEditMode(!editMode)}>
            {editMode ? <CancelIcon /> : <EditIcon />}
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.push("AddAccountForm");
            }}
          >
            <AddIcon />
          </Pressable>
        </View>
      </Pressable>
      <Separator />

      <IncomeExpenseTotal
        total={accounts?.reduce((a, b) => a + b.balance, 0) || 0}
        onlyTotal
      />
      <Separator />
      <ScrollView>
        {accounts && accounts.length <= 0 && (
          <Text
            style={[
              Fonts[FontNames.BODY_3],
              { textAlign: "center", marginTop: 10 },
            ]}
          >
            No accounts yet
          </Text>
        )}

        {accounts &&
          accounts.map((account, index) => (
            <OneCardRow
              typeOfCard={account.name}
              amountOfMoney={account.balance}
              editMode={editMode}
              editFunction={() => {
                navigation.push("EditAccountForm", {
                  accountId: account.id,
                  name: account.name,
                  amountOfMoney: account.balance,
                });
              }}
              deleteFunction={async () => {
                Alert.alert(
                  `Delete ${account.name}`,
                  `Are you sure you want to delete ${account.name}`,
                  [
                    {
                      text: "Yes",
                      onPress: async () => await askAboutDeletion(account),
                    },
                    { text: "No", style: "cancel" },
                  ]
                );
              }}
              key={"oneCardRow" + index}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Accounts;
