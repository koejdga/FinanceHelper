import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionTabs from "./TransactionTabs";
import AddTransactionForm from "./AddTransactionForm";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const Transaction = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionTabs"
        component={TransactionTabs}
        options={{ headerShown: false, headerTitle: "Home" }}
      />

      <Stack.Screen
        name="AddTransactionForm"
        component={AddTransactionForm}
        options={{
          headerTitle: (props) => <Button {...props} title="Buttonn" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default Transaction;
