import Separator from "@/app/components/Separator";
import IncomeExpenseTotal from "@/app/components/expenses-screen/IncomeExpenseTotal";
import AddIcon from "@/app/components/icons/AddIcon";
import CancelIcon from "@/app/components/icons/CancelIcon";
import EditIcon from "@/app/components/icons/EditIcon";
import OneCardRow from "@/app/components/one-row/OneCardRow";
import { base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

const Accounts = ({ navigation }) => {
  const { dark } = useTheme();
  const [editMode, setEditMode] = useState(false);

  const mockData = [
    { typeOfCard: "Card 1", amountOfMoney: 3000 },
    { typeOfCard: "Cash", amountOfMoney: 134.5 },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable style={{ flex: 1 }} onPress={() => setEditMode(false)}>
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
          <Text
            style={[
              Fonts[FontNames.TITLE_2],
              { color: dark ? base.light.light80 : base.dark.dark100 },
            ]}
          >
            Accounts
          </Text>
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              right: 15,
              gap: 5,
            }}
          >
            <Pressable onPress={() => setEditMode(!editMode)}>
              {editMode ? <CancelIcon /> : <EditIcon />}
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.push("AddAccountForm");
              }}
            >
              <AddIcon />
            </Pressable>
          </View>
        </View>
        <Separator />

        <IncomeExpenseTotal income={15500} expense={4878.5} />
        <Separator />

        {mockData.map((row, index) => (
          <OneCardRow
            typeOfCard={row.typeOfCard}
            amountOfMoney={row.amountOfMoney}
            editMode={editMode}
            edit={() => {
              navigation.push("EditAccountForm", {
                name: row.typeOfCard,
                amountOfMoney: row.amountOfMoney,
              });
            }}
            key={"oneCardRow" + index}
          />
        ))}
      </Pressable>
    </SafeAreaView>
  );
};

export default Accounts;
