import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import AddIcon from "@/app/components/icons/AddIcon";
import EditIcon from "@/app/components/icons/EditIcon";
import { base } from "@/app/constants/Colors";
import {
  deleteCategory,
  getAllExpenseCategoriesByDate,
  getAllIncomeCategories,
} from "@/app/utils/ServerCommunication";
import { useIsFocused, useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import CategoryProgressBar from "../../components/one-row/CategoryProgressBar";
import { FontNames, Fonts } from "../../constants/Fonts";
import CancelIcon from "@/app/components/icons/CancelIcon";
import { appAuth } from "@/firebaseConfig";
import MoneyIcon from "@/app/components/icons/MoneyIcon";
const screenWidth = Dimensions.get("window").width;

export interface Category {
  id: string;
  categoryName: string;
  currentExpense?: number;
  limit?: number;
  percentageSpent?: number;
}

const Limits = ({ navigation }) => {
  const { dark } = useTheme();
  const [editMode, setEditMode] = useState(false);
  const [categories, setCategories] = useState<Category[]>();
  const [showIncomeCategories, setShowIncomeCategories] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    const init = async () => {
      let categories: Category[];
      if (showIncomeCategories) {
        categories = await getAllIncomeCategories();
      } else {
        const res = await getAllExpenseCategoriesByDate(
          new Date().getMonth() + 1,
          new Date().getFullYear()
        );
        categories = [
          ...res.categoriesWithLimits,
          ...res.categoriesWithoutLimits,
          ...res.categoriesWithNoExpenses,
        ];
      }

      const sortedCategories = categories.sort((a: Category, b: Category) => {
        if (a.limit === undefined && b.limit !== undefined) {
          return 1;
        } else if (a.limit !== undefined && b.limit === undefined) {
          return -1;
        } else {
          return 0;
        }
      });

      setCategories(sortedCategories);
    };
    init();
  }, [isFocused, showIncomeCategories]);

  // TODO: remove later
  useEffect(() => {
    async function refreshIdToken() {
      if (appAuth && appAuth.currentUser) {
        const token = await appAuth.currentUser.getIdToken(true);
        console.log(token);
      }
    }

    // refreshIdToken();
  });

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

  const deleteCategoryFunction = async (category: Category) => {
    console.log(category);
    const deleted = await deleteCategory(category.id);
    if (deleted) setCategories(categories.filter((c) => c.id !== category.id));
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={() => setEditMode(false)}>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          }}
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
      </Pressable>
      <ScrollView>
        <View
          style={{
            marginTop: 30,
            gap: 15,
            marginHorizontal: 16,
            marginBottom: 30,
          }}
        >
          <Text
            style={[Fonts[FontNames.BODY_1], { color: base.light.light40 }]}
          >
            {showIncomeCategories ? "Income" : "Expense"}
          </Text>
          {categories &&
            categories.map((category, index) => (
              <CategoryProgressBar
                categoryName={category.categoryName}
                percentageSpent={category.percentageSpent}
                spent={category.currentExpense}
                editMode={editMode}
                editFunction={() => {
                  setEditMode(false);
                  navigation.navigate(
                    showIncomeCategories
                      ? "IncomeCategoryForm"
                      : "ExpenseCategoryForm",
                    {
                      categoryId: category.id,
                      name: category.categoryName,
                      limit: category.limit,
                    }
                  );
                }}
                deleteFunction={async () => {
                  Alert.alert(
                    `Delete ${category.categoryName}`,
                    `Are you sure you want to delete ${category.categoryName}`,
                    [
                      {
                        text: "Yes",
                        onPress: async () =>
                          await deleteCategoryFunction(category),
                      },
                      { text: "No", style: "cancel" },
                    ]
                  );
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
              if (showIncomeCategories) {
                navigation.navigate("IncomeCategoryForm");
              } else {
                navigation.navigate("ExpenseCategoryForm");
              }
            }}
          >
            <AddIcon tintColor={"#007aff"} size={30} />
            <Text style={[Fonts[FontNames.BODY_3], { color: "#007aff" }]}>
              Add {showIncomeCategories ? "income" : "expense"} category
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

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
            onPress={() => {
              setEditMode(false);
              setShowIncomeCategories(!showIncomeCategories);
            }}
          >
            <MoneyIcon tintColor={"#007aff"} size={30} />
            <Text style={[Fonts[FontNames.BODY_3], { color: "#007aff" }]}>
              Show {showIncomeCategories ? "expense" : "income"} categories
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Limits;
