import { Text, View } from "react-native";
import { FontNames, Fonts } from "../constants/Fonts";
import { IncomeBlue } from "../constants/Colors";
import { convertNumberToMoney } from "../utils/Utils";
import Separator from "./Separator";

type Props = {
  typeOfCard: string;
  amountOfMoney: number;
  isIncome?: boolean;
};

const OneCardRow: React.FC<Props> = ({ typeOfCard, amountOfMoney }) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 23,
          marginRight: 27,
          marginTop: 3,
        }}
      >
        <Text style={[Fonts[FontNames.SMALL], { flex: 1.5 }]}>
          {typeOfCard}
        </Text>
        <Text
          style={[
            Fonts[FontNames.SMALL],
            {
              color: IncomeBlue,
              flex: 3,
              textAlign: "right",
            },
          ]}
        >
          {convertNumberToMoney(amountOfMoney)}
        </Text>
      </View>
      <Separator />
    </>
  );
};

export default OneCardRow;
