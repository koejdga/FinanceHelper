import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormGeneral from "../add-transaction/FormGeneral";
import TransactionForm from "../add-transaction/TransactionForm";
import ExpenseCategoryForm from "./ExpenseCategoryForm";
import FullScreenTransaction from "./FullScreenTransaction";
import IncomeCategoryForm from "./IncomeCategoryForm";
import TransactionTabs from "./TransactionTabs";

const Stack = createNativeStackNavigator();

const Transaction = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionTabs"
        component={TransactionTabs}
        options={{ headerShown: false, headerTitle: "Home" }}
      />

      <Stack.Screen name="FormGeneral" component={FormGeneral} />
      <Stack.Screen
        name="EditExpenseForm"
        component={TransactionForm}
        options={{ headerTitle: "Edit Expense" }}
      />

      <Stack.Screen
        name="ExpenseCategoryForm"
        component={ExpenseCategoryForm}
        options={{ headerTitle: "New Category" }}
      />

      <Stack.Screen
        name="IncomeCategoryForm"
        component={IncomeCategoryForm}
        options={{ headerTitle: "New Category" }}
      />

      <Stack.Screen
        name="FullScreenTransaction"
        component={FullScreenTransaction}
        options={{ headerTitle: "Full Info" }}
      />
    </Stack.Navigator>
  );
};

export default Transaction;
