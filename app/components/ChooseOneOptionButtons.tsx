import { useState } from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import ChooseOneOptionButton from "./ChooseOneOptionButton";
import SelectedIndicator from "./SelectedIndicator";

export enum TransactionTabsOptions {
  LIMITS = "Limits",
  DAILY = "Daily",
  MONTHLY = "Monthly",
  STATISTICS = "Statistics",
}

export enum TransactionOptions {
  INCOME = "Income",
  EXPENSE = "Expense",
  TRANSFER = "Transfer",
}

interface GenericProps<T> {
  enumeration: any;
  selected: string;
  setSelected: (option: string) => void;
  style?: ViewStyle;
  indicatorStyle?: ViewStyle;
  indicatorPaddingHorizontal?: number;
  textStyle?: StyleProp<TextStyle>;
}

const ChooseOneOptionButtons = <T,>({
  enumeration,
  selected,
  setSelected,
  style,
  indicatorStyle,
  indicatorPaddingHorizontal,
  textStyle,
}: GenericProps<T>) => {
  const [dictOfPositions, setDictOfPositions] = useState({});

  const allKeys = Object.keys(enumeration);
  const keys = allKeys;

  return (
    <View
      style={[
        {
          flexDirection: "row",
          gap: 35,
          paddingHorizontal: 20,
        },
        style,
      ]}
    >
      {keys.map((enumKey, index) => (
        <ChooseOneOptionButton
          dictOfPositions={dictOfPositions}
          setDictOfPositions={setDictOfPositions}
          option={enumeration[enumKey]}
          setSelected={setSelected}
          key={"chooseOneOptionButton" + index}
          textStyle={textStyle}
        />
      ))}
      <SelectedIndicator
        dictOfPositions={dictOfPositions}
        selected={selected}
        style={indicatorStyle}
        paddingHorizontal={indicatorPaddingHorizontal}
      />
    </View>
  );
};

export default ChooseOneOptionButtons;
