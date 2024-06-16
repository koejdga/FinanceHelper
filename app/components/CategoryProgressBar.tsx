import { Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { base } from "../constants/Colors";
import { FontNames, Fonts } from "../constants/Fonts";
import { useTheme } from "@react-navigation/native";

type Props = {
  categoryName: string;
  progress: number;
};

const CategoryProgressBar: React.FC<Props> = ({ categoryName, progress }) => {
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
      <Text
        style={[
          Fonts[FontNames.BODY_3],
          { flex: 2, color: dark ? base.light.light80 : base.dark.dark100 },
        ]}
      >
        {categoryName}
      </Text>
      <Progress.Bar
        progress={progress}
        width={200}
        height={15}
        color={getProgressBarColor(progress)}
        borderColor={"lightgrey"}
        style={{ flex: 3, borderRadius: 10 }}
      />
      <Text
        style={{
          flex: 0.75,
          textAlign: "right",
          color: dark ? base.light.light60 : base.dark.dark25,
        }}
      >
        {progress * 100}%
      </Text>
    </View>
  );
};

export default CategoryProgressBar;
