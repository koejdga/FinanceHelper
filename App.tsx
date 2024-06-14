import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Launch from "./app/screens/login-signup/Launch";
import Login from "./app/screens/login-signup/Login";
import ForgotPassword from "./app/screens/login-signup/ForgotPassword";
import EmailOnTheWay from "./app/screens/login-signup/EmailOnTheWay";
import Signup from "./app/screens/login-signup/Signup";
import MainApp from "./app/screens/MainApp";
import ResetPassword from "./app/screens/login-signup/ResetPassword";
import OnboardingScreen from "./app/screens/login-signup/OnboardingScreen";
import { useColorScheme } from "react-native";

const Stack = createNativeStackNavigator();

const CustomLightTheme: Theme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(256, 256, 256)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

const CustomDarkTheme: Theme = {
  dark: true,
  colors: {
    primary: "rgb(10, 132, 255)",
    background: "rgb(1, 1, 1)",
    card: "rgb(18, 18, 18)",
    text: "rgb(229, 229, 231)",
    border: "rgb(39, 39, 41)",
    notification: "rgb(255, 69, 58)",
  },
};

const App = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer
      theme={scheme === "dark" ? CustomDarkTheme : CustomLightTheme}
    >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="OnboardingScreen"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />

        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          initialParams={{ screenNumber: 1 }}
        />
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: true, headerTitle: "Forgot Password" }}
        />
        <Stack.Screen name="EmailOnTheWay" component={EmailOnTheWay} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
