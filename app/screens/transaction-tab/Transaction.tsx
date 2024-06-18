import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionTabs from "./TransactionTabs";
import AddFormGeneral from "../add-transaction/AddFormGeneral";
import ExpenseCategoryForm from "./ExpenseCategoryForm";
import IncomeCategoryForm from "./IncomeCategoryForm";

const Stack = createNativeStackNavigator();

const Transaction = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionTabs"
        component={TransactionTabs}
        options={{ headerShown: false, headerTitle: "Home" }}
      />

      <Stack.Screen name="AddFormGeneral" component={AddFormGeneral} />

      <Stack.Screen
        name="AddExpenseCategoryForm"
        component={ExpenseCategoryForm}
        options={{ headerTitle: "New Category" }}
        initialParams={{ isIncome: true }}
      />
      <Stack.Screen
        name="EditExpenseCategoryForm"
        component={ExpenseCategoryForm}
        options={{ headerTitle: "Edit Category" }}
        initialParams={{ isIncome: false }}
      />

      <Stack.Screen
        name="AddIncomeCategoryForm"
        component={IncomeCategoryForm}
        options={{ headerTitle: "New Category" }}
        initialParams={{ isIncome: true }}
      />
      <Stack.Screen
        name="EditIncomeCategoryForm"
        component={IncomeCategoryForm}
        options={{ headerTitle: "Edit Category" }}
        initialParams={{ isIncome: false }}
      />
    </Stack.Navigator>
  );
};

export default Transaction;
