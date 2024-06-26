import CategoriesProgresses from "@/app/components/expenses-screen/CategoriesProgresses";
import TotalExpensesPieChart from "@/app/components/expenses-screen/TotalExpensesPieChart";
import AddIcon from "@/app/components/icons/AddIcon";
import CancelIcon from "@/app/components/icons/CancelIcon";
import EditIcon from "@/app/components/icons/EditIcon";
import MoneyIcon from "@/app/components/icons/MoneyIcon";
import { base } from "@/app/constants/Colors";
import { Category } from "@/app/utils/Interfaces";
import {
  deleteCategory,
  getAllExpenseCategoriesByDate,
  getAllIncomeCategories,
} from "@/app/utils/server-communication/CategoryRequests";
import { appAuth } from "@/firebaseConfig";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { FontNames, Fonts } from "../../constants/Fonts";

const Limits = ({ navigation, month, year }) => {
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
        const res = await getAllExpenseCategoriesByDate(month + 1, year);
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
  }, [isFocused, showIncomeCategories, month, year]);

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

  const deleteCategoryFunction = async (category: Category) => {
    const deleted = await deleteCategory(category.id);
    if (deleted === true)
      setCategories(categories.filter((c) => c.id !== category.id));
    else {
      const errorMessage = deleted as string;
      Alert.alert("Error", errorMessage, [{ text: "OK" }]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={() => setEditMode(false)}>
        <TotalExpensesPieChart month={month} year={year} />
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
          <CategoriesProgresses
            categories={categories}
            navigation={navigation}
            showIncomeCategories={showIncomeCategories}
            editMode={editMode}
            setEditMode={setEditMode}
            deleteCategoryFunction={deleteCategoryFunction}
          />

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
