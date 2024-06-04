import { Accent } from "@/constants/Colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [loaded] = useFonts({
    bold: require("../assets/fonts/Inter-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Accent[100],
      }}
    >
      <Text style={styles.text}>Finance</Text>
      <Text style={styles.text}>Helper</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 56,
    fontFamily: "bold",
    color: "#ffffff",
  },
});
