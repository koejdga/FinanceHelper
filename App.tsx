import MainApp from "@/app/screens/MainApp";
import Signup from "@/app/screens/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Launch from "./app/screens/Launch";
import Login from "./app/screens/Login";
import OnboardingScreen from "./app/screens/OnboardingScreen";
import ForgotPassword from "./app/screens/ForgotPassword";
import EmailOnTheWay from "./app/screens/EmailOnTheWay";
import ResetPassword from "@/app/screens/ResetPassword";

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
