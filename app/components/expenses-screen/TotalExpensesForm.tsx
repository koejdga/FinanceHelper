import { base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { saveData } from "@/app/utils/SaveLocally";
import React, { useEffect, useState } from "react";
import { Alert, Keyboard, Pressable, Text, View } from "react-native";
import FormTextInput from "../form-components/FormTextInput";
import CheckIcon from "../icons/CheckIcon";

type Props = {
  expenseGoal?: number;
  setExpenseGoal: (expenseGoal: number) => void;
  updateUIAfterEditing: () => void;
};

const TotalExpensesForm: React.FC<Props> = ({
  expenseGoal,
  setExpenseGoal,
  updateUIAfterEditing,
}) => {
  console.log("expense goal:", expenseGoal);
  const [newExpenseGoal, setNewExpenseGoal] = useState<number | "" | undefined>(
    expenseGoal
  );
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    console.log("expenseGoal !== undefined:", expenseGoal !== undefined);
    setEditing(expenseGoal !== undefined);
  }, []);

  const createExpenseGoal = async (): Promise<boolean> => {
    if (newExpenseGoal === "" || newExpenseGoal === 0) {
      Alert.alert("Error", "Write expense goal", [{ text: "OK" }]);
      return false;
    }
    const saved = await saveData("totalExpenseGoal", newExpenseGoal.toString());
    if (saved) {
      setExpenseGoal(newExpenseGoal);
      return true;
    } else {
      Alert.alert(
        "Cannot save your goal",
        "Check if you've written a valid number",
        [{ text: "OK" }]
      );
      return false;
    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
        marginHorizontal: 16,
      }}
    >
      <Text style={[Fonts[FontNames.TITLE_3], { marginBottom: 10 }]}>
        Set your goal for expenses
      </Text>
      <Text
        style={[
          Fonts[FontNames.BODY_3],
          { color: base.light.light40, marginBottom: 5 },
        ]}
      >
        How much money do you plan to spend this month?
      </Text>
      <View style={{ flexDirection: "row", gap: 30, alignItems: "center" }}>
        <FormTextInput
          placeholder="Enter your goal..."
          value={newExpenseGoal?.toString() || ""}
          onChangeText={(value) => {
            if (!isNaN(parseFloat(value))) {
              setNewExpenseGoal(parseFloat(value));
            } else {
              setNewExpenseGoal("");
            }
          }}
          keyboardType="decimal-pad"
          style={{ flex: 1, marginHorizontal: 0, marginBottom: 0 }}
        />
        <Pressable
          onPress={async () => {
            const created = await createExpenseGoal();
            if (created) {
              Keyboard.dismiss();
            }
            if (created && editing) {
              updateUIAfterEditing();
            }
          }}
        >
          <CheckIcon color={base.light.light20} size={30} />
        </Pressable>
      </View>
    </View>
  );
};

export default TotalExpensesForm;
