import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionTabs from "./TransactionTabs";
import AddFormGeneral from "../add-transaction/AddFormGeneral";
import CategoryForm from "./CategoryForm";

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
        name="AddCategoryForm"
        component={CategoryForm}
        options={{ headerTitle: "New Category" }}
      />
      <Stack.Screen
        name="EditCategoryForm"
        component={CategoryForm}
        options={{ headerTitle: "Edit Category" }}
      />
    </Stack.Navigator>
  );
};

export default Transaction;
