import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import AddTransactionForm from "./AddTransactionForm";
import AddTransferForm from "./AddTransferForm";
import EmptyScreen from "../EmptyScreen";
import ChooseTransaction from "@/app/components/choose-one-option-buttons/ChooseTransaction";
import { TransactionOptions } from "@/app/components/choose-one-option-buttons/ChooseOneOptionButtons";

const Stack = createNativeStackNavigator();

const AddFormGeneral = ({ navigation }) => {
  const [selected, setSelected] = useState<string>(
    TransactionOptions.INCOME.toString()
  );

  useEffect(() => {
    navigation.navigate(selected);
    navigation.setOptions({
      headerTitle: () => (
        <ChooseTransaction selected={selected} setSelected={setSelected} />
      ),
    });
  }, [selected]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="Launch" component={EmptyScreen} />
      <Stack.Screen
        name={TransactionOptions.INCOME}
        component={AddTransactionForm}
        initialParams={{ isIncome: true }}
      />

      <Stack.Screen
        name={TransactionOptions.EXPENSE}
        component={AddTransactionForm}
        initialParams={{ isIncome: false }}
      />
      <Stack.Screen
        name={TransactionOptions.TRANSFER}
        component={AddTransferForm}
      />
    </Stack.Navigator>
  );
};

export default AddFormGeneral;
