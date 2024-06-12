import { SafeAreaView, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import { FormTextInput } from "../components/form-components/FormTextInput";
import { FontNames, Fonts } from "../constants/Fonts";

const ForgotPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <Text
        style={[
          Fonts[FontNames.TITLE_2],
          { marginTop: 69, marginHorizontal: 16 },
        ]}
      >
        Don’t worry.
      </Text>
      <Text style={[Fonts[FontNames.TITLE_2], { marginHorizontal: 16 }]}>
        Enter your email and we’ll
      </Text>
      <Text
        style={[
          Fonts[FontNames.TITLE_2],
          { marginBottom: 46, marginHorizontal: 16 },
        ]}
      >
        send you a link to reset your password.
      </Text>

      <FormTextInput placeholder="Email" style={{ marginBottom: 32 }} />
      <CustomButton
        title="Continue"
        onPress={() => {
          console.log("Send email");
          navigation.navigate("EmailOnTheWay");
        }}
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;
