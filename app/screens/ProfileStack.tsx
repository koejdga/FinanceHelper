import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import Settings from "./Settings";
import ListWithChoices from "./ListWithChoices";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="ListWithChoices"
        component={ListWithChoices}
        initialParams={{ options: [] }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
