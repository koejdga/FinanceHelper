import { StyleSheet, View } from "react-native";
import { Accent } from "../../constants/Colors";

const SmallDot = () => {
  return (
    <View
      style={{
        backgroundColor: Accent[20],
        width: 8,
        aspectRatio: 1,
        borderRadius: 4,
      }}
    ></View>
  );
};

export default SmallDot;

const styles = StyleSheet.create({});
