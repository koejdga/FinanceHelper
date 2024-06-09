import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListWithChoices from "./ListWithChoices";
import Settings from "./Settings";

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="ListWithChoices"
        component={ListWithChoices}
        initialParams={{ options: [] }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
