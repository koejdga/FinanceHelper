import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "./app/screens/Login";
import Launch from "./app/screens/Launch";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homew">
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Homew" component={Launch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
