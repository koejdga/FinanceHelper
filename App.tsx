import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Launch from "./app/screens/Launch";
import Login from "./app/screens/Login";
import OnboardingScreen from "./app/screens/OnboardingScreen";
import SettingsStack from "./app/screens/SettingsStack";
import Profile from "./app/screens/Profile";
import MainApp from "@/app/screens/MainApp";
import Settings from "./app/screens/Settings";
import Signup from "@/app/screens/Signup";
import ExpensesHistory from "./app/screens/ExpensesHistory";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          initialParams={{ screenNumber: 1 }}
        />
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen name="SettingsStack" component={SettingsStack} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
