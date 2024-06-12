import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontNames, Fonts } from "../constants/Fonts";
import { Accent, base } from "../constants/Colors";
import ArrowRightIcon from "./icons/ArrowRightIcon";

type Props = {
  title: string;
  additionalText?: string;
  onPress: () => void;
};

const SettingsRow: React.FC<Props> = ({ title, additionalText, onPress }) => {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
      }}
      onPress={onPress}
    >
      <Text style={[Fonts[FontNames.BODY_1]]}>{title}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={[Fonts[FontNames.BODY_3], { color: base.light.light20 }]}>
          {additionalText}
        </Text>
        <ArrowRightIcon color={Accent[100]} width={24} height={24} />
      </View>
    </Pressable>
  );
};

export default SettingsRow;
