import CustomButton from "@/app/components/buttons/CustomButton";
import FormTextInput from "@/app/components/form-components/FormTextInput";
import OneQuestion from "@/app/components/one-row/OneQuestion";
import { useState } from "react";
import { View } from "react-native";

const AccountForm = ({ route }) => {
  const GAP_IN_QUESTION = 12;
  const [name, setName] = useState((route.params?.name as string) || "");
  const [amountOfMoney, setAmountOfMoney] = useState<number | undefined>(
    (route.params?.amountOfMoney as number) || undefined
  );
  const editting = name || amountOfMoney;

  const add = () => {};
  const edit = () => {};

  return (
    <View style={{ marginTop: 30, gap: 24, flex: 1 }}>
      <OneQuestion
        question={"Account name? For example, Salary Card or Cash"}
        inputField={
          <FormTextInput
            value={name}
            onChangeText={(value) => setName(value)}
            maxLength={25}
            style={{ marginHorizontal: 0, marginTop: GAP_IN_QUESTION }}
          />
        }
      />
      <OneQuestion
        question={"How much money do you have on that card?"}
        inputField={
          <FormTextInput
            value={amountOfMoney ? amountOfMoney.toString() : ""}
            onChangeText={(value) => setAmountOfMoney(parseFloat(value))}
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
  );
};

export default AccountForm;
