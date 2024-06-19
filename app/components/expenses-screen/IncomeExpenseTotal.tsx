import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ExpenseDark,
  ExpenseLight,
  IncomeDark,
  IncomeLight,
  base,
} from "../../constants/Colors";
import { FontNames, Fonts } from "../../constants/Fonts";
import { convertNumberToMoney } from "../../utils/Utils";

type Props = {
  income?: number;
  expense?: number;
  total: number;
  onlyTotal?: boolean;
};

const IncomeExpenseTotal: React.FC<Props> = ({
  income,
  expense,
  total,
  onlyTotal = false,
}) => {
  const { dark } = useTheme();
  const styles = StyleSheet.create({
    title: {
      ...Fonts[FontNames.BODY_2],
      ...{ color: dark ? base.light.light80 : base.dark.dark100 },
    },
  });

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
      {!onlyTotal && (
        <>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>Income</Text>
            <Text
              style={[
                Fonts[FontNames.BODY_3],
                { color: dark ? IncomeLight : IncomeDark },
              ]}
            >
              {convertNumberToMoney(income)}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>Expense</Text>
            <Text
              style={[
                Fonts[FontNames.BODY_3],
                { color: dark ? ExpenseLight : ExpenseDark },
              ]}
            >
              {convertNumberToMoney(expense)}
            </Text>
          </View>
        </>
      )}
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Total</Text>
        <Text
          style={[
            Fonts[FontNames.BODY_3],
            { color: dark ? base.light.light80 : base.dark.dark100 },
          ]}
        >
          {convertNumberToMoney(total)}
        </Text>
      </View>
    </View>
  );
};

export default IncomeExpenseTotal;
