import { Text, View } from "react-native";
import { ExpenseRed, IncomeBlue } from "../../constants/Colors";
import { FontNames, Fonts } from "../../constants/Fonts";
import { convertNumberToMoney } from "../../utils/Utils";

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
  return (
    <View
      style={{
        flexDirection: "row",
        marginLeft: 23,
        marginRight: 27,
        marginTop: 3,
      }}
    >
      <Text style={[Fonts[FontNames.SMALL], { flex: 1.5 }]}>{name}</Text>
      <Text style={[Fonts[FontNames.SMALL], { flex: 2 }]}>{typeOfCard}</Text>
      <Text
        style={[
          Fonts[FontNames.SMALL],
          {
            color: isIncome ? IncomeBlue : ExpenseRed,
            flex: 1,
            textAlign: "right",
          },
        ]}
      >
        {convertNumberToMoney(amountOfMoney)}
      </Text>
    </View>
  );
};

export default OneExpenseRow;
