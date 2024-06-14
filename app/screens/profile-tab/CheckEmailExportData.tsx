import CustomButton from "@/app/components/buttons/CustomButton";
import { base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const CheckEmailExportData = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const SCREEN_WIDTH = width;
  const IMAGE_PADDING = 24;
  const IMAGE_WIDTH = SCREEN_WIDTH - IMAGE_PADDING * 2;

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
