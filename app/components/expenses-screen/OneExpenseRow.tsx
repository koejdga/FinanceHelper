import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import {
  ExpenseDark,
  ExpenseLight,
  IncomeDark,
  IncomeLight,
  base,
} from "../../constants/Colors";
import { FontNames, Fonts } from "../../constants/Fonts";
import { convertNumberToMoney } from "../../utils/Utils";
import { useContext } from "react";
import { SettingsContext } from "@/app/enums_and_contexts/EnumsAndContexts";

type Props = {
  name: string;
  typeOfCard: string;
  amountOfMoney: number;
  isIncome?: boolean;
};

const OneExpenseRow: React.FC<Props> = ({
  name,
  typeOfCard,
  amountOfMoney,
  isIncome = false,
}) => {
  const { dark } = useTheme();
  const { currency, allCurrencies } = useContext(SettingsContext);

  return (
    <View
      style={{
        flexDirection: "row",
        marginLeft: 23,
        marginRight: 27,
        marginTop: 3,
      }}
    >
      <Text
        style={[
          Fonts[FontNames.SMALL],
          { flex: 1.5, color: dark ? base.light.light80 : base.dark.dark100 },
        ]}
      >
        {name}
      </Text>
      <Text
        style={[
          Fonts[FontNames.SMALL],
          { flex: 2, color: dark ? base.light.light80 : base.dark.dark100 },
        ]}
      >
        {typeOfCard}
      </Text>
      <Text
        style={[
          Fonts[FontNames.SMALL],
          {
            color: isIncome
              ? dark
                ? IncomeLight
                : IncomeDark
              : dark
              ? ExpenseLight
              : ExpenseDark,
            flex: 1,
            textAlign: "right",
          },
        ]}
      >
        {convertNumberToMoney(amountOfMoney, currency, allCurrencies)}
      </Text>
    </View>
  );
};

export default OneExpenseRow;
