import { View, Text } from "react-native";
import React from "react";
import { FontNames, Fonts } from "../constants/Fonts";
import { ExpenseRed, IncomeBlue } from "../constants/Colors";
import { convertNumberToMoney } from "../utils/Utils";

type Props = {
  income: number;
  expense: number;
};

const IncomeExpenseTotal: React.FC<Props> = ({ income, expense }) => {
  if (income < 0) {
    return <Text>Sorry, negative income provided</Text>;
  }

  if (expense < 0) {
    return <Text>Sorry, negative expense provided</Text>;
  }

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
        marginTop: 4,
        justifyContent: "space-evenly",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={[Fonts[FontNames.BODY_2]]}>Income</Text>
        <Text style={[Fonts[FontNames.BODY_3], { color: IncomeBlue }]}>
          {convertNumberToMoney(income)}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={[Fonts[FontNames.BODY_2]]}>Expense</Text>
        <Text style={[Fonts[FontNames.BODY_3], { color: ExpenseRed }]}>
          {convertNumberToMoney(expense)}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={[Fonts[FontNames.BODY_2]]}>Total</Text>
        <Text style={[Fonts[FontNames.BODY_3]]}>
          {convertNumberToMoney(income - expense)}
        </Text>
      </View>
    </View>
  );
};

export default IncomeExpenseTotal;
