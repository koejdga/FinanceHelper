import { base } from "@/app/constants/Colors";
import { formStyles } from "@/app/constants/Styles";
import { TextInput, TextInputProps, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

type SecureTextProps = TextInputProps;

export function SecureTextInput(props: SecureTextProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={[
        formStyles.hidePasswordTextField,
        formStyles.textInputWrap,
        { marginBottom: 40 },
      ]}
    >
      <TextInput
        spellCheck={false}
        secureTextEntry={!showPassword}
        placeholder="Password"
        placeholderTextColor={base.light.light20}
        {...props}
        style={[formStyles.textInput]}
      />
      <Ionicons
        name={showPassword ? "eye-off" : "eye"}
        size={30}
        onPress={() => setShowPassword(!showPassword)}
        color={base.light.light20}
        style={{ position: "absolute", right: 16 }}
      ></Ionicons>
    </View>
  );
}
