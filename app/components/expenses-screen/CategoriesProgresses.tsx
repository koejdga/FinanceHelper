import { base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { Category } from "@/app/utils/Interfaces";
import { convertNumberToMoney } from "@/app/utils/Utils";
import { useTheme } from "@react-navigation/native";
import { Alert, Pressable, Text, View } from "react-native";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import WigglyIcon from "../icons/WigglyIcon";
import ProgressBar from "./ProgressBar";
import { useContext } from "react";
import { SettingsContext } from "@/app/enums_and_contexts/EnumsAndContexts";

type Props = {
  categories: Category[];
  navigation: any;
  showIncomeCategories: boolean;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  deleteCategoryFunction: (category: Category) => void;
};

const CategoriesProgresses: React.FC<Props> = ({
  categories,
  navigation,
  showIncomeCategories,
  editMode,
  setEditMode,
  deleteCategoryFunction,
}) => {
  const { dark } = useTheme();
  const { currency, allCurrencies } = useContext(SettingsContext);
  const GAP = 15;

  if (!categories) return;

  const editFunction = (category: Category) => {
    setEditMode(false);
    navigation.navigate(
      showIncomeCategories ? "IncomeCategoryForm" : "ExpenseCategoryForm",
      {
        categoryId: category.id,
        name: category.categoryName,
        limit: category.limit,
      }
    );
  };

  const deleteFunction = async (category: Category) => {
    Alert.alert(
      `Delete ${category.categoryName}`,
      `Are you sure you want to delete ${category.categoryName}`,
      [
        {
          text: "Yes",
          onPress: async () => await deleteCategoryFunction(category),
        },
        { text: "No", style: "cancel" },
      ]
    );
  };

  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <View style={{ gap: GAP, flex: 1 }}>
        {categories.map((category, index) => (
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              alignItems: "center",
            }}
            key={"categoryNameAndExpense" + index}
          >
            <Text
              style={[
                Fonts[FontNames.BODY_3],
                { color: dark ? base.light.light80 : base.dark.dark100 },
              ]}
            >
              {category.categoryName}
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
              {category.currentExpense !== undefined &&
                convertNumberToMoney(
                  category.currentExpense,
                  currency,
                  allCurrencies
                )}
            </Text>
          </View>
        ))}
      </View>

      <View style={{ gap: GAP, flex: 1 }}>
        {categories.map((category, index) => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                opacity: category.limit ? 1 : 0,
              }}
              key={"categoryNameAndExpense" + index}
            >
              <ProgressBar category={category} />
            </View>
          );
        })}
      </View>

      <View style={{ gap: GAP }}>
        {categories.map((category, index) => {
          const component = editMode ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Pressable onPress={() => editFunction(category)}>
                <WigglyIcon icon={<EditIcon />} />
              </Pressable>
              <Pressable onPress={() => deleteFunction(category)}>
                <WigglyIcon icon={<DeleteIcon tintColor={"red"} />} />
              </Pressable>
            </View>
          ) : (
            category.percentageSpent !== undefined && (
              <Text
                style={{
                  textAlign: "right",
                  color: dark ? base.light.light60 : base.dark.dark25,
                }}
              >
                {(category.percentageSpent * 100).toFixed()}%
              </Text>
            )
          );

          return <View key={"percentageSpent" + index}>{component}</View>;
        })}
      </View>
    </View>
  );
};

export default CategoriesProgresses;
