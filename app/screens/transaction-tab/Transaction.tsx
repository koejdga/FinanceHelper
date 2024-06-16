import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionTabs from "./TransactionTabs";
import AddFormGeneral from "../add-transaction/AddFormGeneral";
import AddCategoryForm from "./CategoryForm";

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
        component={AddCategoryForm}
        options={{ headerTitle: "New Category" }}
      />
      <Stack.Screen
        name="EditCategoryForm"
        component={AddCategoryForm}
        options={{ headerTitle: "Edit Category" }}
      />
    </Stack.Navigator>
  );
};

export default Transaction;
