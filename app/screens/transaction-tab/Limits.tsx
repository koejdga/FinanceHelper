import { Button, Pressable, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import CategoryProgressBar from "../../components/CategoryProgressBar";
import { FontNames, Fonts } from "../../constants/Fonts";
import { useTheme } from "@react-navigation/native";
import { base } from "@/app/constants/Colors";
import AddTransactionButton from "@/app/components/buttons/AddTransactionButton";
import AddIcon from "@/app/components/icons/AddIcon";
import { getCategories } from "@/app/utils/ServerCommunication";
import { useEffect } from "react";
const screenWidth = Dimensions.get("window").width;

const Limits = ({ navigation }) => {
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

  let categories = [
    { categoryName: "Food", progress: 0.3 },
    { categoryName: "Clothes", progress: 0.6 },
  ];
  useEffect(() => {
    const init = async () => {
      categories = await getCategories();
      categories = [
        { categoryName: "Food", progress: 0.3 },
        { categoryName: "Clothes", progress: 0.6 },
      ];
    };
    init();
  }, []);

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
      <View style={{ marginTop: 30, gap: 15, marginHorizontal: 16 }}>
        {categories.map((category, index) => (
          <CategoryProgressBar
            categoryName={category.categoryName}
            progress={category.progress}
            key={"categoryProgressBar" + index}
          />
        ))}

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
          onPress={() => {
            navigation.navigate("AddCategoryForm");
          }}
        >
          <AddIcon tintColor={"#007aff"} size={30} />
          <Text style={[Fonts[FontNames.BODY_3], { color: "#007aff" }]}>
            Add category
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Limits;
