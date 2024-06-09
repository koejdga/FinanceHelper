import {ColorValue, TextInput, View} from "react-native";
import {formStyles} from "@/constants/Styles";

type FormTextInputProps = {
    onChangeText?: ((text: string) => void);
    placeholder?: string | undefined;
};

export function FormTextInput(props: FormTextInputProps){
    return <View style={formStyles.textInputWrap}>
        <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={"gray"}
            onChangeText={(value) => props.onChangeText?props.onChangeText(value):null}
            style={formStyles.textInput}
        />
    </View>
}