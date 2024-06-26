import FormTextInput from "@/app/components/form-components/FormTextInput";
import { SecureTextInput } from "@/app/components/form-components/SecureTextInput";
import {
  emailChecker,
  nameChecker,
  passwordChecker,
} from "@/app/utils/validation-scripts/login-validation";
import { useState } from "react";
import {Alert, ScrollView, View} from "react-native";
import CustomButton from "../buttons/CustomButton";

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
    <ScrollView>
      <View>
        <FormTextInput
          placeholder="Name"
          onChangeText={(value) => setName(value)}
        />
        <FormTextInput
          keyboardType="email-address"
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
      </View>
    </ScrollView>
  );
}
