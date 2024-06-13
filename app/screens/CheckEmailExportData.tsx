import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { FontNames, Fonts } from "../constants/Fonts";
import { base } from "../constants/Colors";
import CustomButton from "../components/CustomButton";

const CheckEmailExportData = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const SCREEN_WIDTH = width;
  const IMAGE_PADDING = 24;
  const IMAGE_WIDTH = SCREEN_WIDTH - IMAGE_PADDING * 2;

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <Image
        style={[styles.image, { width: IMAGE_WIDTH, height: IMAGE_WIDTH }]}
        source={require("@/app/assets/images/check-email.jpg")}
      ></Image>
      <Text style={[Fonts[FontNames.BODY_1], styles.text]}>
        Check your email, we send you the financial report. In certain cases, it
        might take a little longer, depending on the time period and the volume
        of activity.
      </Text>
      <View style={{ flex: 1 }}></View>
      <CustomButton
        title="Back to Home"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: base.dark.dark25,
    paddingHorizontal: 16,
    textAlign: "center",
  },
  image: {
    marginTop: 32,
    marginBottom: 26,
    marginHorizontal: "auto",
  },
});

export default CheckEmailExportData;
