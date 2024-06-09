import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Launch from "@/app/screens/Launch";
import Login from "@/app/screens/Login";
import OnboardingScreen from "@/app/screens/OnboardingScreen";
import MainApp from "@/app/screens/MainApp";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainApp"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          initialParams={{ screenNumber: 1 }}
        />
        <Stack.Screen name="Launch" component={Launch} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
