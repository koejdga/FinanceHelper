import { View, Text } from "react-native";
import React from "react";
import { FontNames, Fonts } from "../constants/Fonts";
import { base } from "../constants/Colors";
import SuccessIcon from "./icons/SuccessIcon";

type Props = {
  title: string;
  checked: boolean;
};

const ListItem: React.FC<Props> = ({ title, checked }) => {
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
      <Text style={[Fonts[FontNames.BODY_3], { color: base.dark.dark100 }]}>
        {title}
      </Text>
      {checked && <SuccessIcon color="#5233FF" />}
    </View>
  );
};

export default ListItem;
