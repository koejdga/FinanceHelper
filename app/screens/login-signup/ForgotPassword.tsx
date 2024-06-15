import {Alert, SafeAreaView, Text} from "react-native";
import CustomButton from "../../components/buttons/CustomButton";
import { FontNames, Fonts } from "../../constants/Fonts";
import FormTextInput from "@/app/components/form-components/FormTextInput";
import {emailChecker} from "@/app/utils/validation-scripts/login-validation";
import {sendPasswordResetEmail} from "@firebase/auth";
import {appAuth} from "@/firebaseConfig";
import {useState} from "react";

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const sendResetPasswordEmail = () => {
        let emailCorrectness = emailChecker(email);
        if (!emailCorrectness.isValid) {
            let message = emailCorrectness.message;
            Alert.alert("", message, [{ text: "OK" }]);
        } else {
            sendPasswordResetEmail(appAuth, email)
                .then(() => {
                    navigation.navigate("EmailOnTheWay");
                })
                .catch(() => {
                    let message = "Something's wrong!";
                    Alert.alert("", message, [{ text: "OK" }]);
                });
        }
    };
  return (
    <SafeAreaView style={{ flex: 1 }}>
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

      <FormTextInput
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={{ marginBottom: 32 }} />
      <CustomButton
        title="Continue"
        onPress={sendResetPasswordEmail}
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;
