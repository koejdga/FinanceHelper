import { TransactionOptions } from "@/app/components/choose-one-option-buttons/ChooseOneOptionButtons";
import ChooseTransaction from "@/app/components/choose-one-option-buttons/ChooseTransaction";
import { Transaction } from "@/app/utils/Interfaces";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import EmptyScreen from "../EmptyScreen";
import {NavigationContainer} from "@react-navigation/native";
import AddTransferForm from "./AddTransferForm";
import TransactionForm from "./TransactionForm";

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
<NavigationContainer>
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
</NavigationContainer>
  );
};

export default AddFormGeneral;
