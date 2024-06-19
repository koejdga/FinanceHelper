import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { base } from "../../constants/Colors";
import { FontNames, Fonts } from "../../constants/Fonts";
import SuccessIcon from "../icons/SuccessIcon";

type Props = {
  title: string;
  checked: boolean;
};

const ListItem: React.FC<Props> = ({ title, checked }) => {
  const { dark } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 10,
        height: 52,
      }}
    >
      <Text
        style={[
          Fonts[FontNames.BODY_3],
          { color: dark ? base.light.light80 : base.dark.dark100 },
        ]}
      >
        {title}
      </Text>
      {checked && <SuccessIcon color="#5233FF" />}
    </View>
  );
};

export default ListItem;
