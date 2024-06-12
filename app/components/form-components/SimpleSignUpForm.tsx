import { View, Text, Alert } from "react-native";
import { useState } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  emailChecker,
  nameChecker,
  passwordChecker,
} from "@/scripts/validation-scripts/login-validation";
import { SecureTextInput } from "@/app/components/form-components/SecureTextInput";
import { formStyles } from "@/app/constants/Styles";
import { FormTextInput } from "@/app/components/form-components/FormTextInput";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { base } from "@/app/constants/Colors";
import CustomButton from "../CustomButton";

type SignUpFormProps = {
  onSubmit?: (name: string, email: string, password: string) => any;
};

export function SimpleSignUpForm(props: SignUpFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const requirementsChecker = () => {
    let nameCorrectness = nameChecker(name);
    let emailCorrectness = emailChecker(email);
    let passwordCorrectness = passwordChecker(password);

    if (
      !nameCorrectness.isValid ||
      !emailCorrectness.isValid ||
      !passwordCorrectness.isValid
    ) {
      let message = nameCorrectness.isValid
        ? passwordCorrectness.isValid
          ? emailCorrectness.message
          : passwordCorrectness.message
        : nameCorrectness.message;
      Alert.alert("", message, [{ text: "OK" }]);
    } else if (props.onSubmit) props.onSubmit(name, email, password);
  };

  return (
    <GestureHandlerRootView>
      <View>
        <FormTextInput
          placeholder="Name"
          onChangeText={(value) => setName(value)}
        />
        <FormTextInput
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
        />
        <SecureTextInput onChangeText={(text) => setPassword(text)} />
        <CustomButton
          title="Sign Up"
          onPress={() => {
            requirementsChecker();
          }}
        />
        {/* <BorderlessButton
          onPress={() => {
            requirementsChecker();
          }}
          style={formStyles.button}
        >
          <Text
            style={[Fonts[FontNames.TITLE_3], { color: base.light.light80 }]}
          >
            Sign Up
          </Text>
        </BorderlessButton> */}
      </View>
    </GestureHandlerRootView>
  );
}
