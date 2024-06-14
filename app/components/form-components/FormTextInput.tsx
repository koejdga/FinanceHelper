import { base } from "@/app/constants/Colors";
import { formStyles } from "@/app/constants/Styles";
import { useTheme } from "@react-navigation/native";
import { TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps;

const FormTextInput: React.FC<Props> = (props) => {
  const { dark } = useTheme();

  return (
    <View style={[formStyles.textInputWrap, { marginBottom: 24 }, props.style]}>
      <TextInput
        spellCheck={false}
        placeholderTextColor={base.light.light20}
        {...props}
        style={[
          formStyles.textInput,
          { color: dark ? base.light.light80 : base.dark.dark100 },
          props.style,
        ]}
      />
    </View>
  );
};

export default FormTextInput;
