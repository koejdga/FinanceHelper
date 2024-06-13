import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddFormGeneral from "./AddFormGeneral";
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

      <Stack.Screen name="AddFormGeneral" component={AddFormGeneral} />
    </Stack.Navigator>
  );
};

export default Transaction;
