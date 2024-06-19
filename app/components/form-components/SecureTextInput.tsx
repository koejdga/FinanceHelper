import { base } from "@/app/constants/Colors";
import { formStyles } from "@/app/constants/Styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { TextInput, View } from "react-native";

type SecureTextProps = {
  onChangeText?: (text: string) => void;
};

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
        onChangeText={(value) =>
          props.onChangeText ? props.onChangeText(value) : null
        }
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
