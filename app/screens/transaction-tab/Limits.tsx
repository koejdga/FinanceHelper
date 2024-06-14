import { Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import CategoryProgressBar from "../../components/CategoryProgressBar";
import { FontNames, Fonts } from "../../constants/Fonts";
import { useTheme } from "@react-navigation/native";
import { base } from "@/app/constants/Colors";
const screenWidth = Dimensions.get("window").width;

const Limits = () => {
  const { dark } = useTheme();
  const data = [
    {
      amount: 66,
      color: "lightgreen",
    },
    {
      amount: 33,
      color: "orange",
    },
  ];

  const categories = [
    { categoryName: "Food", progress: 0.3 },
    { categoryName: "Clothes", progress: 0.6 },
  ];

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };

  return (
    <View>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"amount"}
        backgroundColor={"transparent"}
        paddingLeft={`${screenWidth * 0.25}`}
        hasLegend={false}
        avoidFalseZero
      />
      <Text
        style={[
          Fonts[FontNames.TITLE_3],
          {
            textAlign: "center",
            color: dark ? base.light.light80 : base.dark.dark100,
          },
        ]}
      >
        $1500 spent, $3000 left
      </Text>
      <View style={{ marginTop: 30, gap: 15 }}>
        {categories.map((category, index) => (
          <CategoryProgressBar
            categoryName={category.categoryName}
            progress={category.progress}
            key={"categoryProgressBar" + index}
          />
        ))}
      </View>
    </View>
  );
};

export default Limits;
