import Separator from "@/app/components/Separator";
import IncomeExpenseTotal from "@/app/components/expenses-screen/IncomeExpenseTotal";
import AddIcon from "@/app/components/icons/AddIcon";
import EditIcon from "@/app/components/icons/EditIcon";
import OneCardRow from "@/app/components/one-row/OneCardRow";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { SafeAreaView, Text, View } from "react-native";

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
