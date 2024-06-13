import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { TransactionOptions } from "../components/ChooseOneOptionButtons";
import ChooseTransaction from "../components/ChooseTransaction";
import AddTransactionForm from "./AddTransactionForm";
import AddTransferForm from "./AddTransferForm";
import WhiteScreen from "./WhiteScreen";

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
      <Stack.Screen name="Launch" component={WhiteScreen} />
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
