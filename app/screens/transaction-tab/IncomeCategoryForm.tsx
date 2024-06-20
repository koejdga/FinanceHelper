import CustomButton from "@/app/components/buttons/CustomButton";
import FormTextInput from "@/app/components/form-components/FormTextInput";
import OneQuestion from "@/app/components/one-row/OneQuestion";
import {
  addIncomeCategory,
  editIncomeCategory,
} from "@/app/utils/server-communication/CategoryRequests";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

const IncomeCategoryForm = ({ route, navigation }) => {
  const GAP_IN_QUESTION = 12;
  const [categoryId, _] = useState((route.params?.categoryId as string) || "");
  const [name, setName] = useState((route.params?.name as string) || "");
  const [editting, setEditting] = useState(false);

  useEffect(() => {
    setEditting((categoryId !== undefined && categoryId !== "") as boolean);
  }, []);

  const add = async () => {
    const added = await addIncomeCategory(name);
    if (added === true) {
      navigation.goBack();
    } else {
      const errorMessage = added as string;
      Alert.alert("Error", errorMessage, [{ text: "OK" }]);
    }
  };

  const edit = async () => {
    const edited = await editIncomeCategory(categoryId, name);
    if (edited === true) {
      navigation.goBack();
    } else {
      const errorMessage = edited as string;
      Alert.alert("Error", errorMessage, [{ text: "OK" }]);
    }
  };

  return (
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

      <View style={{ flex: 1 }}></View>
      <CustomButton
        title={editting ? "Edit category" : "Add category"}
        onPress={editting ? edit : add}
      />
    </View>
  );
};

export default IncomeCategoryForm;
