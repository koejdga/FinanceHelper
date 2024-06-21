import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckEmailExportData from "./CheckEmailExportData";
import ExportData from "./ExportData";
import ListWithChoices from "./ListWithChoices";
import Profile from "./Profile";
import Settings from "./Settings";
import ListsWithChoices from "./ListsWithChoices";
import About from "./About";
import Help from "./Help";

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
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen
        name="ListWithChoices"
        component={ListWithChoices}
        initialParams={{ options: [] }}
      />

      <Stack.Screen
        name="ListsWithChoices"
        component={ListsWithChoices}
        initialParams={{ mainOptions: [], otherOptions: [] }}
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
