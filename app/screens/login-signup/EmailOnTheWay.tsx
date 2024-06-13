import {
  Text,
  View,
  SafeAreaView,
  Image,
  useWindowDimensions,
} from "react-native";
import { FontNames, Fonts } from "../../constants/Fonts";
import { base } from "../../constants/Colors";
import CustomButton from "../../components/buttons/CustomButton";

const EmailOnTheWay = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const SCREEN_WIDTH = width;
  const IMAGE_PADDING = 30;
  const IMAGE_WIDTH = SCREEN_WIDTH - IMAGE_PADDING * 2;

  return (
    <SafeAreaView
      style={{ alignItems: "center", backgroundColor: "#FFF", flex: 1 }}
    >
      <Image
        style={{
          marginTop: 32,
          marginBottom: 18,
          width: IMAGE_WIDTH,
          height: IMAGE_WIDTH,
        }}
        source={require("@/app/assets/images/email-on-the-way.jpg")}
      ></Image>
      <Text
        style={[
          Fonts[FontNames.TITLE_2],
          { color: base.dark.dark100, marginBottom: 24, textAlign: "center" },
        ]}
      >
        Your email is on the way
      </Text>
      <Text
        style={[
          Fonts[FontNames.BODY_1],
          {
            color: base.dark.dark25,
            paddingHorizontal: 24,
            textAlign: "center",
          },
        ]}
      >
        Check your email katejohnson@gmail.com and follow the instructions to
        reset your password
      </Text>
      <View style={{ flex: 1 }}></View>
      <CustomButton
        title="Back to Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </SafeAreaView>
  );
};

export default EmailOnTheWay;
