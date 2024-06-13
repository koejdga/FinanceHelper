import { Alert, Pressable, ScrollView, Text, View } from "react-native";

import { formContainerStyles, formStyles } from "@/app/constants/Styles";
import { useState } from "react";
import {
  BorderlessButton,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { emailChecker } from "@/scripts/validation-scripts/login-validation";
import { sendPasswordResetEmail } from "@firebase/auth";
import { appAuth } from "@/firebaseConfig";
import FormTextInput from "@/app/components/form-components/FormTextInput";

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState("");

  const checkEmail = () => {
    let emailCorrectness = emailChecker(email);
    if (!emailCorrectness.isValid) {
      let message = emailCorrectness.message;
      Alert.alert("", message, [{ text: "OK" }]);
    } else {
      sendPasswordResetEmail(appAuth, email)
        .then(() => {
          let message = "Email for password change was sent to this address";
          Alert.alert("", message, [
            { text: "OK", onPress: navigation.navigate("Login") },
          ]);
        })
        .catch(() => {
          let message = "Something's wrong!";
          Alert.alert("", message, [{ text: "OK" }]);
        });
    }
  };
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View
          style={[
            formContainerStyles.alignCenter,
            { width: "90%", marginTop: "45%" },
          ]}
        >
          <Text
            style={[formContainerStyles.alignCenter, formContainerStyles.title]}
          >
            Reset password
          </Text>
          <FormTextInput
            placeholder="Your email"
            onChangeText={(value) => setEmail(value)}
          />
          <BorderlessButton
            onPress={() => {
              checkEmail();
            }}
            style={formStyles.button}
          >
            <Text>Send me an email to reset password</Text>
          </BorderlessButton>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={[
                formContainerStyles.accentText,
                formContainerStyles.alignCenter,
              ]}
            >
              Back to login
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
