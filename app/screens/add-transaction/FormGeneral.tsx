import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import TransactionForm from "./TransactionForm";
import AddTransferForm from "./AddTransferForm";
import EmptyScreen from "../EmptyScreen";
import ChooseTransaction from "@/app/components/choose-one-option-buttons/ChooseTransaction";
import { TransactionOptions } from "@/app/components/choose-one-option-buttons/ChooseOneOptionButtons";
import { Transaction } from "@/app/utils/ServerCommunication";

const Stack = createNativeStackNavigator();

const AddFormGeneral = ({ route, navigation }) => {
  const month = route.params?.month as number;
  const year = route.params?.year as number;

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
        component={TransactionForm}
        initialParams={{ isIncome: true }}
      />

      <Stack.Screen
        name={TransactionOptions.EXPENSE}
        component={TransactionForm}
        initialParams={{
          isIncome: false,
          transaction: route.params?.transaction as Transaction,
          month: month,
          year: year,
        }}
      />
      <Stack.Screen
        name={TransactionOptions.TRANSFER}
        component={AddTransferForm}
      />
    </Stack.Navigator>
  );
};

export default AddFormGeneral;
