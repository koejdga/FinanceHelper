import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountForm from "./AccountForm";
import Accounts from "./Accounts";

const Stack = createNativeStackNavigator();

const BudgetStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accounts"
        component={Accounts}
        options={{ headerShown: false, headerTitle: "Home" }}
      />

      <Stack.Screen
        name="AddAccountForm"
        component={AccountForm}
        options={{ headerTitle: "New Account" }}
      />
      <Stack.Screen
        name="EditAccountForm"
        component={AccountForm}
        options={{ headerTitle: "Edit Account" }}
      />
    </Stack.Navigator>
  );
};

export default BudgetStack;
