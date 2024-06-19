import { convertNumberToMoney } from "@/app/utils/Utils";
import { useTheme } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { base } from "../../constants/Colors";
import { FontNames, Fonts } from "../../constants/Fonts";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import WigglyIcon from "../icons/WigglyIcon";

type Props = {
  categoryName: string;
  percentageSpent?: number;
  spent: number;
  editMode?: boolean;
  editFunction: () => void;
  deleteFunction: () => void;
};

const CategoryProgressBar: React.FC<Props> = ({
  categoryName,
  percentageSpent,
  spent,
  editMode = false,
  editFunction,
  deleteFunction,
}) => {
  const { dark } = useTheme();

  const getProgressBarColor = (progress: number) => {
    if (progress < 0 || progress > 1) {
      console.log("ERROR: wrong progress provided");
      return "violet";
    }

    if (progress < 0.1) return "red";
    if (progress < 0.3) return "orange";
    if (progress < 0.5) return "gold";
    if (progress < 0.7) return "lightgreen";
    if (progress <= 1) return "green";
  };

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 30,
        alignItems: "center",
      }}
    >
      <View style={{ flex: 2, flexDirection: "row" }}>
        <Text
          style={[
            Fonts[FontNames.BODY_3],
            { color: dark ? base.light.light80 : base.dark.dark100 },
          ]}
        >
          {categoryName}
        </Text>
        <Text
          style={[
            Fonts[FontNames.SMALL],
            {
              textAlign: "right",
              flex: 1,
              color: dark ? base.light.light80 : base.dark.dark100,
            },
          ]}
        >
          {spent !== undefined && convertNumberToMoney(spent)}
        </Text>
      </View>

      <View style={{ flex: 3, flexDirection: "row", gap: 10 }}>
        {percentageSpent !== undefined ? (
          <Progress.Bar
            progress={percentageSpent}
            width={200}
            height={15}
            color={getProgressBarColor(percentageSpent)}
            borderColor={"lightgrey"}
            style={{ flex: 3, borderRadius: 10 }}
          />
        ) : (
          <View style={{ flex: 1 }}></View>
        )}
        {editMode ? (
          <>
            <Pressable onPress={editFunction}>
              <WigglyIcon icon={<EditIcon />} />
            </Pressable>
            <Pressable onPress={deleteFunction}>
              <WigglyIcon icon={<DeleteIcon tintColor={"red"} />} />
            </Pressable>
          </>
        ) : (
          percentageSpent !== undefined && (
            <Text
              style={{
                textAlign: "right",
                color: dark ? base.light.light60 : base.dark.dark25,
              }}
            >
              {percentageSpent}%
            </Text>
          )
        )}
      </View>
    </View>
  );
};

export default CategoryProgressBar;
