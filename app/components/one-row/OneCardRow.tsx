import { IncomeDark, IncomeLight, base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { convertNumberToMoney } from "@/app/utils/Utils";
import { Pressable, Text, View } from "react-native";
import Separator from "../Separator";
import { useTheme } from "@react-navigation/native";
import WigglyEditIcon from "../icons/WigglyEditIcon";

type Props = {
  typeOfCard: string;
  amountOfMoney: number;
  isIncome?: boolean;
  editMode?: boolean;
  edit: () => void;
};

const OneCardRow: React.FC<Props> = ({
  typeOfCard,
  amountOfMoney,
  editMode = false,
  edit,
}) => {
  const { dark } = useTheme();

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 23,
          marginRight: 27,
          marginTop: 3,
          alignItems: "center",
        }}
      >
        <Text
          style={[
            Fonts[FontNames.SMALL],
            {
              flex: editMode ? 1 : 1.5,
              color: dark ? base.light.light80 : base.dark.dark100,
            },
          ]}
        >
          {typeOfCard}
        </Text>
        <Text
          style={[
            Fonts[FontNames.SMALL],
            {
              color: dark ? IncomeLight : IncomeDark,
              flex: editMode ? 1 : 3,
              textAlign: "right",
            },
          ]}
        >
          {convertNumberToMoney(amountOfMoney)}
        </Text>
        {editMode && (
          <>
            <View style={{ flex: 1 }}></View>
            <Pressable onPress={edit}>
              <WigglyEditIcon />
            </Pressable>
          </>
        )}
      </View>
      <Separator />
    </>
  );
};

export default OneCardRow;
