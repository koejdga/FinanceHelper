import { base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  inputField: JSX.Element;
};

const RowInAddTransactionForm: React.FC<Props> = ({ title, inputField }) => {
  const { dark } = useTheme();

  return (
    <View style={{ flexDirection: "row", width: "100%", alignItems: "center" }}>
      <Text
        style={[
          Fonts[FontNames.BODY_1],
          { flex: 1, color: dark ? base.light.light80 : base.dark.dark100 },
        ]}
      >
        {title}
      </Text>
      <View style={{ flex: 2 }}>{inputField}</View>
    </View>
  );
};

export default RowInAddTransactionForm;
