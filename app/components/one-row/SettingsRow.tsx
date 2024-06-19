import { Accent, base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import ArrowRightIcon from "../icons/ArrowRightIcon";

type Props = {
  title: string;
  additionalText?: string;
  onPress: () => void;
};

const SettingsRow: React.FC<Props> = ({ title, additionalText, onPress }) => {
  const { dark } = useTheme();

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
      <Text
        style={[
          Fonts[FontNames.BODY_1],
          { color: dark ? base.light.light80 : base.dark.dark100 },
        ]}
      >
        {title}
      </Text>
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
