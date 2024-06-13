import { SafeAreaView, Text, View } from "react-native";
import AddIcon from "../components/icons/AddIcon";
import EditIcon from "../components/icons/EditIcon";
import { FontNames, Fonts } from "../constants/Fonts";
import Separator from "../components/Separator";
import IncomeExpenseTotal from "../components/expenses_screen/IncomeExpenseTotal";
import OneCardRow from "../components/OneCardRow";

const Budget = () => {
  const mockData = [
    { typeOfCard: "Card 1", amountOfMoney: 3000 },
    { typeOfCard: "Cash", amountOfMoney: 134.5 },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          marginTop: 3,
          marginBottom: 5,
        }}
      >
        <Text style={[Fonts[FontNames.TITLE_2]]}>Accounts</Text>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            right: 15,
            gap: 5,
          }}
        >
          <EditIcon />
          <AddIcon />
        </View>
      </View>
      <Separator />

      <IncomeExpenseTotal income={15500} expense={4878.5} />
      <Separator />

      {mockData.map((row, index) => (
        <OneCardRow
          typeOfCard={row.typeOfCard}
          amountOfMoney={row.amountOfMoney}
          key={"oneCardRow" + index}
        />
      ))}
    </SafeAreaView>
  );
};

export default Budget;
