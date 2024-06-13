import { IncomeBlue } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { convertNumberToMoney } from "@/app/utils/Utils";
import { Text, View } from "react-native";
import Separator from "../Separator";

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
