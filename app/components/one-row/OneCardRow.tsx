import { IncomeDark, IncomeLight, base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { convertNumberToMoney } from "@/app/utils/Utils";
import { Text, View } from "react-native";
import Separator from "../Separator";
import { useTheme } from "@react-navigation/native";

type Props = {
  typeOfCard: string;
  amountOfMoney: number;
  isIncome?: boolean;
};

const OneCardRow: React.FC<Props> = ({ typeOfCard, amountOfMoney }) => {
  const { dark } = useTheme();

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
        <Text
          style={[
            Fonts[FontNames.SMALL],
            { flex: 1.5, color: dark ? base.light.light80 : base.dark.dark100 },
          ]}
        >
          {typeOfCard}
        </Text>
        <Text
          style={[
            Fonts[FontNames.SMALL],
            {
              color: dark ? IncomeLight : IncomeDark,
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
