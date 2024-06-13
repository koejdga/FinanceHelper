import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import Settings from "./Settings";
import ListWithChoices from "./ListWithChoices";
import ExportData from "./ExportData";
import CheckEmailExportData from "./CheckEmailExportData";

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

      <Stack.Screen
        name="ExportData"
        component={ExportData}
        options={{ headerTitle: "Export Data" }}
      />
      <Stack.Screen
        name="CheckEmailExportData"
        component={CheckEmailExportData}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
