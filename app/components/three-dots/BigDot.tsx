import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Accent } from "../../constants/Colors";

const BigDot = () => {
  return (
    <View
      style={{
        backgroundColor: Accent[100],
        width: 16,
        aspectRatio: 1,
        borderRadius: 8,
      }}
    ></View>
  );
};

export default BigDot;

const styles = StyleSheet.create({});
