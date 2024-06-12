import { TextInput, View, ViewStyle } from "react-native";
import { formStyles } from "@/app/constants/Styles";
import { base } from "@/app/constants/Colors";

type FormTextInputProps = {
  onChangeText?: (text: string) => void;
  placeholder?: string | undefined;
  style?: ViewStyle;
};

export function FormTextInput(props: FormTextInputProps) {
  return (
    <View style={[formStyles.textInputWrap, { marginBottom: 24 }, props.style]}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={base.light.light20}
        onChangeText={(value) =>
          props.onChangeText ? props.onChangeText(value) : null
        }
        style={formStyles.textInput}
      />
    </View>
  );
}
