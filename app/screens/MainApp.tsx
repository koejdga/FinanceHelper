import Budget from "@/app/screens/Budget";
import Profile from "@/app/screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SingleBottomTab, { TabNames } from "../components/SingleBottomTab";
import ExpensesHistory from "./ExpensesHistory";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case TabNames.TRANSACTION:
              return (
                <SingleBottomTab
                  tabName={TabNames.TRANSACTION}
                  focused={focused}
                />
              );
            case TabNames.BUDGET:
              return (
                <SingleBottomTab tabName={TabNames.BUDGET} focused={focused} />
              );
            case TabNames.PROFILE:
              return (
                <SingleBottomTab tabName={TabNames.PROFILE} focused={focused} />
              );
          }
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name={TabNames.TRANSACTION} component={ExpensesHistory} />
      <Tab.Screen name={TabNames.BUDGET} component={Budget} />
      <Tab.Screen
        name={TabNames.PROFILE}
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
