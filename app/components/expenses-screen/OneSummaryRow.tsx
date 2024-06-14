import { View, Text } from "react-native";
import React from "react";
import { convertNumberToMoney } from "../../utils/Utils";
import { FontNames, Fonts } from "../../constants/Fonts";
import {
  ExpenseDark,
  ExpenseLight,
  IncomeDark,
  IncomeLight,
  base,
} from "../../constants/Colors";
import { useTheme } from "@react-navigation/native";

type Props = {
  periodName: string; // either date ("24 Fri") or month ("May")
  totalIncome: number;
  totalExpense: number;
};

const OneSummaryRow: React.FC<Props> = ({
  periodName,
  totalIncome,
  totalExpense,
}) => {
  const { dark } = useTheme();
  return (
    <View style={{ flexDirection: "row", marginTop: 3 }}>
      <Text
        style={[
          Fonts[FontNames.BODY_3],
          { marginLeft: 14, flex: 3.5 },
          { color: dark ? base.light.light80 : base.dark.dark100 },
        ]}
      >
        {periodName}
      </Text>
      <Text
        style={[
          Fonts[FontNames.BODY_3],
          { color: dark ? IncomeLight : IncomeDark, flex: 2 },
        ]}
      >
        {convertNumberToMoney(totalIncome)}
      </Text>
      <Text
        style={[
          Fonts[FontNames.BODY_3],
          { color: dark ? ExpenseLight : ExpenseDark, flex: 2 },
        ]}
      >
        {convertNumberToMoney(totalExpense)}
      </Text>
    </View>
  );
};

export default OneSummaryRow;
