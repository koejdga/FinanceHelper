import { base } from "@/app/constants/Colors";
import { formStyles } from "@/app/constants/Styles";
import { TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps;

const FormTextInput: React.FC<Props> = (props) => {
  return (
    <View style={[formStyles.textInputWrap, { marginBottom: 24 }, props.style]}>
      <TextInput
        spellCheck={false}
        placeholderTextColor={base.light.light20}
        {...props}
        style={[formStyles.textInput, props.style]}
      />
    </View>
  );
};

export default FormTextInput;
