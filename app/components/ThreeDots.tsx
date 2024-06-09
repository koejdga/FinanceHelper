import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import BigDot from "./BigDot";
import SmallDot from "./SmallDot";
import { ScreenNumber } from "../screens/OnboardingScreen";

type Props = {
  style?: ViewStyle;
  bigNumber: ScreenNumber;
};

const ThreeDots: React.FC<Props> = ({ style, bigNumber }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        },
        style,
      ]}
    >
      {Array.from({ length: 3 }).map((_, index) =>
        index + 1 === bigNumber ? <BigDot /> : <SmallDot />
      )}
    </View>
  );
};

export default ThreeDots;

const styles = StyleSheet.create({});
