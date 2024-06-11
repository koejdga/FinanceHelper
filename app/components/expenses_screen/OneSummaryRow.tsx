import { View, Text } from "react-native";
import React from "react";
import { convertNumberToMoney } from "../../utils/Utils";
import { FontNames, Fonts } from "../../constants/Fonts";
import { ExpenseRed, IncomeBlue } from "../../constants/Colors";

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
  return (
    <View style={{ flexDirection: "row", marginTop: 3 }}>
      <Text style={[Fonts[FontNames.BODY_3], { marginLeft: 14, flex: 3.5 }]}>
        {periodName}
      </Text>
      <Text style={[Fonts[FontNames.BODY_3], { color: IncomeBlue, flex: 2 }]}>
        {convertNumberToMoney(totalIncome)}
      </Text>
      <Text style={[Fonts[FontNames.BODY_3], { color: ExpenseRed, flex: 2 }]}>
        {convertNumberToMoney(totalExpense)}
      </Text>
    </View>
  );
};

export default OneSummaryRow;
