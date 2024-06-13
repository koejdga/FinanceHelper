import { FontNames, Fonts } from "@/app/constants/Fonts";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  inputField: JSX.Element;
};

const RowInAddTransactionForm: React.FC<Props> = ({ title, inputField }) => {
  return (
    <View style={{ flexDirection: "row", width: "100%", alignItems: "center" }}>
      <Text style={[Fonts[FontNames.BODY_1], { flex: 1 }]}>{title}</Text>
      <View style={{ flex: 2 }}>{inputField}</View>
    </View>
  );
};

export default RowInAddTransactionForm;
