import { FormTextInput } from "@/app/components/form-components/FormTextInput";
import { SecureTextInput } from "@/app/components/form-components/SecureTextInput";
import {
  emailChecker,
  passwordChecker,
} from "@/scripts/validation-scripts/login-validation";
import { useState } from "react";
import { Alert, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomButton from "../buttons/CustomButton";

type LoginFormProps = {
  onSubmit?: (email: string, password: string) => any;
};

export function SimpleLoginForm(props: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const requirementsChecker = () => {
    let emailCorrectness = emailChecker(email);
    let passwordCorrectness = passwordChecker(password);
    if (!emailCorrectness.isValid || !passwordCorrectness.isValid) {
      let message = emailCorrectness.isValid
        ? passwordCorrectness.message
        : emailCorrectness.message;
      Alert.alert("", message, [{ text: "OK" }]);
    } else if (props.onSubmit) props.onSubmit(email, password);
  };

  return (
    <GestureHandlerRootView>
      <View>
        <FormTextInput
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
        />
        <SecureTextInput onChangeText={(text) => setPassword(text)} />
        <CustomButton
          title="Login"
          onPress={() => {
            requirementsChecker();
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}
