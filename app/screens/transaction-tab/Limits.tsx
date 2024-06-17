import { Pressable, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";

import AddIcon from "@/app/components/icons/AddIcon";
import EditIcon from "@/app/components/icons/EditIcon";
import { base } from "@/app/constants/Colors";
import { getAllCategories } from "@/app/utils/ServerCommunication";
import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import CategoryProgressBar from "../../components/one-row/CategoryProgressBar";
import { FontNames, Fonts } from "../../constants/Fonts";
import CancelIcon from "@/app/components/icons/CancelIcon";
const screenWidth = Dimensions.get("window").width;

const Limits = ({ navigation }) => {
  const { dark } = useTheme();
  const [editMode, setEditMode] = useState(false);

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
    { categoryName: "Food", progress: 0.3, limit: 4000 },
    { categoryName: "Clothes", progress: 0.6, limit: 10000 },
  ];
  useEffect(() => {
    const init = async () => {
      // categories = await getAllCategories();
      categories = [
        { categoryName: "Food", progress: 0.3, limit: 4000 },
        { categoryName: "Clothes", progress: 0.6, limit: 10000 },
      ];
    };
    init();
  }, []);

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };

  return (
    <Pressable onPress={() => setEditMode(false)}>
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
            editMode={editMode}
            edit={() => {
              setEditMode(false);
              navigation.navigate("EditCategoryForm", {
                name: category.categoryName,
                limit: category.limit,
              });
            }}
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

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
          onPress={() => {
            setEditMode(!editMode);
          }}
        >
          {editMode ? (
            <CancelIcon tintColor={"#007aff"} size={30} />
          ) : (
            <EditIcon tintColor={"#007aff"} size={30} />
          )}
          <Text style={[Fonts[FontNames.BODY_3], { color: "#007aff" }]}>
            {editMode ? "Stop editting" : "Edit category"}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default Limits;
