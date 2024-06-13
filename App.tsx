import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Launch from "./app/screens/login-signup/Launch";
import Login from "./app/screens/login-signup/Login";
import ForgotPassword from "./app/screens/login-signup/ForgotPassword";
import EmailOnTheWay from "./app/screens/login-signup/EmailOnTheWay";
import Signup from "./app/screens/login-signup/Signup";
import MainApp from "./app/screens/MainApp";
import ResetPassword from "./app/screens/login-signup/ResetPassword";
import OnboardingScreen from "./app/screens/login-signup/OnboardingScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="MainApp"
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
