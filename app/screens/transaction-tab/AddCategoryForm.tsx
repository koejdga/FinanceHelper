import CustomButton from "@/app/components/buttons/CustomButton";
import FormTextInput from "@/app/components/form-components/FormTextInput";
import OneQuestion from "@/app/components/one-row/OneQuestion";
import { addCategory } from "@/app/utils/ServerCommunication";
import { useState } from "react";
import { View } from "react-native";

const AddCategoryForm = ({ navigation }) => {
  const GAP_IN_QUESTION = 12;
  const [name, setName] = useState("");
  const [limit, setLimit] = useState<number | undefined>();

  return (
    <View style={{ marginTop: 30, gap: 24, flex: 1 }}>
      <OneQuestion
        question={"Category name? For examle, Food"}
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
        title="Add category"
        onPress={async () => {
          try {
            await addCategory(name, limit);
            navigation.goBack();
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </View>
  );
};

export default AddCategoryForm;
