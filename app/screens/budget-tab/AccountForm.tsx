import CustomButton from "@/app/components/buttons/CustomButton";
import FormTextInput from "@/app/components/form-components/FormTextInput";
import OneQuestion from "@/app/components/one-row/OneQuestion";
import {
  addAccount,
  editAccount,
} from "@/app/utils/server-communication/AccountRequests";
import { useEffect, useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback, View } from "react-native";

const AccountForm = ({ route, navigation }) => {
  const GAP_IN_QUESTION = 12;
  const [accountId, _] = useState((route.params?.accountId as string) || "");
  const [name, setName] = useState((route.params?.name as string) || "");
  const [balance, setBalance] = useState<number | undefined>(
    (route.params?.amountOfMoney as number) || undefined
  );
  const [editting, setEditting] = useState(false);

  useEffect(() => {
    setEditting((accountId !== undefined && accountId !== "") as boolean);
  }, []);

  const add = async () => {
    const added = await addAccount(name, balance);
    if (added === true) {
      navigation.navigate("Accounts");
    } else {
      const errorMessage = added as string;
      Alert.alert("Error", errorMessage, [{ text: "OK" }]);
    }
  };

  const edit = async () => {
    const edited = await editAccount(accountId, name, balance);
    if (edited === true) {
      navigation.goBack();
    } else {
      const errorMessage = edited as string;
      Alert.alert("Error", errorMessage, [{ text: "OK" }]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ marginTop: 30, gap: 24, flex: 1 }}>
        <OneQuestion
          question={"Account name? For example, Salary Card or Cash"}
          inputField={
            <FormTextInput
              placeholder="Enter your account name..."
              value={name}
              onChangeText={(value) => setName(value)}
              maxLength={25}
              style={{ marginHorizontal: 0, marginTop: GAP_IN_QUESTION }}
            />
          }
        />
        <OneQuestion
          question={"How much money do you have on this account?"}
          inputField={
            <FormTextInput
              placeholder="I have..."
              value={balance ? balance.toString() : ""}
              onChangeText={(value) => setBalance(parseFloat(value))}
              maxLength={25}
              style={{ marginHorizontal: 0, marginTop: GAP_IN_QUESTION }}
              keyboardType="decimal-pad"
            />
          }
        />

        <View style={{ flex: 1 }}></View>
        <CustomButton
          title={editting ? "Edit account" : "Add account"}
          onPress={editting ? edit : add}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AccountForm;
