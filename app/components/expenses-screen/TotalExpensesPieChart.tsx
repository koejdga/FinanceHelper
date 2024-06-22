import { base, red } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { SettingsContext } from "@/app/enums_and_contexts/EnumsAndContexts";
import { loadData, removeValue } from "@/app/utils/SaveLocally";
import { convertNumberToMoney } from "@/app/utils/Utils";
import { getAllTransactions } from "@/app/utils/server-communication/TransactionRequests";
import { useTheme } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  Text,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import EditIcon from "../icons/EditIcon";
import TotalExpensesForm from "./TotalExpensesForm";
import DeleteIcon from "../icons/DeleteIcon";
const screenWidth = Dimensions.get("window").width;

type Props = {
  month: number;
  year: number;
};

const TotalExpensesPieChart: React.FC<Props> = ({ month, year }) => {
  const { dark } = useTheme();
  const { currency, allCurrencies } = useContext(SettingsContext);
  const [expenseGoal, setExpenseGoal] = useState<number | undefined>();
  const [showPieChart, setShowPieChart] = useState(false);
  const [expenseActual, setExpenseActual] = useState<number>(0);
  const [percentageForPieChart, setPercentageForPieChart] = useState<number>(0);

  useEffect(() => {
    const init = async () => {
      const transactionsInfo = await getAllTransactions(month, year);
      setExpenseActual(transactionsInfo.amountExpense);
      const totalGoal = await loadData("totalExpenseGoal");

      if (totalGoal === null) {
        return;
      }

      setExpenseGoal(totalGoal);
      setPercentageForPieChart(
        transactionsInfo.amountExpense / (totalGoal as number)
      );
      setShowPieChart(totalGoal !== undefined);
    };

    init();
  }, []);

  useEffect(() => {
    const change = async () => {
      if (expenseGoal === null || expenseGoal === undefined) {
        return;
      }
      if (expenseGoal === 0) {
        setPercentageForPieChart(0);
        return;
      }
      const percentage = expenseActual / (expenseGoal as number);
      setPercentageForPieChart(percentage > 1 ? 1 : percentage);
      setShowPieChart(true);
    };

    change();
  }, [expenseGoal]);

  const edit = () => {
    setShowPieChart(false);
  };

  const askAboutDeletion = () => {
    Alert.alert(
      "Delete your expense goal for month",
      "Are you sure you want to delete your expense goal for month",
      [
        {
          text: "Yes",
          onPress: async () => await deleteFunction(),
        },
        { text: "No", style: "cancel" },
      ]
    );
  };

  const deleteFunction = async () => {
    const removed = await removeValue("totalExpenseGoal");
    if (removed) {
      setShowPieChart(false);
    }
  };

  const afterEditing = () => {
    setShowPieChart(true);
  };

  return (
    <>
      {!showPieChart ? (
        <TotalExpensesForm
          expenseGoal={expenseGoal}
          setExpenseGoal={setExpenseGoal}
          updateUIAfterEditing={afterEditing}
        />
      ) : (
        <View>
          <View>
            <PieChart
              data={[
                {
                  amount: (1 - percentageForPieChart) * 100,
                  color: "lightgreen",
                },
                {
                  amount: percentageForPieChart * 100,
                  color: "orange",
                },
              ]}
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
            <View style={styles.centeredView}>
              <Text
                style={[
                  Fonts[FontNames.TITLE_3],
                  {
                    textAlign: "center",
                    color: dark ? base.light.light80 : base.dark.dark100,
                    position: "absolute",
                  },
                  styles.text,
                ]}
              >
                {(100 * expenseActual) / expenseGoal > 0 &&
                (100 * expenseActual) / expenseGoal < 1
                  ? "<1"
                  : ((100 * expenseActual) / expenseGoal).toFixed()}
                %
              </Text>
            </View>
          </View>
          <Text
            style={[
              Fonts[FontNames.TITLE_3],
              {
                textAlign: "center",
                color: dark ? base.light.light80 : base.dark.dark100,
              },
            ]}
          >
            {convertNumberToMoney(expenseActual, currency, allCurrencies)} spent
          </Text>
          <Text
            style={[
              Fonts[FontNames.TITLE_3],
              {
                textAlign: "center",
                color: dark ? base.light.light80 : base.dark.dark100,
              },
            ]}
          >
            {convertNumberToMoney(
              expenseGoal - expenseActual < 0 ? 0 : expenseGoal - expenseActual,
              currency,
              allCurrencies
            )}{" "}
            left
          </Text>

          <View
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              flexDirection: "row",
              gap: 4,
            }}
          >
            <Pressable onPress={edit}>
              <EditIcon tintColor={base.light.light40} />
            </Pressable>
            <Pressable onPress={askAboutDeletion}>
              <DeleteIcon tintColor={red[60]} />
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: "absolute",
    top: "50%",
    textAlign: "center",
    width: "100%",
  },
  text: { width: "100%", textAlign: "center" },
});

export default TotalExpensesPieChart;
