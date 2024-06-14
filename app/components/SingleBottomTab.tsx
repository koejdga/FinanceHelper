import React from "react";
import { Text, View } from "react-native";
import { Accent } from "../constants/Colors";
import { FontNames, Fonts } from "../constants/Fonts";
import BudgetIcon from "./icons/BudgetIcon";
import ProfileIcon from "./icons/ProfileIcon";
import TransactionIcon from "./icons/TransactionIcon";

export enum TabNames {
  TRANSACTION = "Transaction",
  BUDGET = "Budget",
  PROFILE = "ProfileStack",
}

const TabsConfig: Record<
  TabNames,
  { icon: (color: string) => JSX.Element; title: string }
> = {
  [TabNames.TRANSACTION]: {
    icon: (color: string) => <TransactionIcon color={color} />,
    title: "Transaction",
  },
  [TabNames.BUDGET]: {
    icon: (color: string) => <BudgetIcon color={color} />,
    title: "Budget",
  },
  [TabNames.PROFILE]: {
    icon: (color: string) => <ProfileIcon color={color} />,
    title: "Profile",
  },
};

type Props = {
  tabName: TabNames;
  focused?: boolean;
};

const SingleBottomTab: React.FC<Props> = ({ tabName, focused = false }) => {
  const color = focused ? Accent[100] : "#C6C6C6";
  return (
    <View style={{ alignItems: "center", gap: 4, marginTop: 11 }}>
      {TabsConfig[tabName].icon(color)}
      <Text style={[Fonts[FontNames.TINY], { color }]}>
        {TabsConfig[tabName].title}
      </Text>
    </View>
  );
};

export default SingleBottomTab;
