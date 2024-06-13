import { Accent } from "@/app/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

const Launch = () => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: Accent[100],
        },
      ]}
    >
      <Text style={styles.text}>Finance</Text>
      <Text style={styles.text}>Helper</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 56,
    fontFamily: "Inter-Bold",
    color: "#ffffff",
  },
});

export default Launch;
