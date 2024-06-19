import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SingleBottomTab, { TabNames } from "../components/SingleBottomTab";
import Transaction from "./transaction-tab/Transaction";
import ProfileStack from "./profile-tab/ProfileStack";
import Accounts from "./budget-tab/Accounts";
import BudgetStack from "./budget-tab/BudgetStack";

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
      <Tab.Screen name={TabNames.TRANSACTION} component={Transaction} />
      <Tab.Screen name={TabNames.BUDGET} component={BudgetStack} />
      <Tab.Screen
        name={TabNames.PROFILE}
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
