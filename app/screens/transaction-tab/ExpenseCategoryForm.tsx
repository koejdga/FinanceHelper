import CustomButton from "@/app/components/buttons/CustomButton";
import FormTextInput from "@/app/components/form-components/FormTextInput";
import OneQuestion from "@/app/components/one-row/OneQuestion";
import {
  addExpenseCategory,
  editExpenseCategory,
} from "@/app/utils/server-communication/CategoryRequests";
import { useEffect, useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback, View } from "react-native";

const ExpenseCategoryForm = ({ route, navigation }) => {
  const GAP_IN_QUESTION = 12;
  const [categoryId, _] = useState((route.params?.categoryId as string) || "");
  const [name, setName] = useState((route.params?.name as string) || "");
  const [limit, setLimit] = useState<number | undefined>(
    (route.params?.limit as number) || undefined
  );
  const [editting, setEditting] = useState(false);

  useEffect(() => {
    setEditting((categoryId !== undefined && categoryId !== "") as boolean);
  }, []);

  const add = async () => {
    const added = await addExpenseCategory(name, limit);
    if (added === true) {
      navigation.goBack();
    } else {
      const errorMessage = added as string;
      Alert.alert("Error", errorMessage, [{ text: "OK" }]);
    }
  };

  const edit = async () => {
    const edited = await editExpenseCategory(categoryId, name, limit);
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
          question={"Category name? For example, Food"}
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
          question={
            "How much money would you like to spend on this category? (optional)"
          }
          inputField={
            <FormTextInput
              value={limit ? limit.toString() : ""}
              onChangeText={(value) => setLimit(parseFloat(value))}
              maxLength={25}
              style={{ marginHorizontal: 0, marginTop: GAP_IN_QUESTION }}
              keyboardType="decimal-pad"
            />
          }
        />

        <View style={{ flex: 1 }}></View>
        <CustomButton
          title={editting ? "Edit category" : "Add category"}
          onPress={editting ? edit : add}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ExpenseCategoryForm;
