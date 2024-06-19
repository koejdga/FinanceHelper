import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ScreenNumber } from "../../screens/login-signup/OnboardingScreen";
import BigDot from "./BigDot";
import SmallDot from "./SmallDot";

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
        index + 1 === bigNumber ? (
          <BigDot key={"bigdot" + index} />
        ) : (
          <SmallDot key={"smalldot" + index} />
        )
      )}
    </View>
  );
};

export default ThreeDots;

const styles = StyleSheet.create({});
