import {TextInput, View} from "react-native";
import {formStyles} from "@/app/constants/Styles";

type FormTextInputProps = {
    onChangeText?: ((text: string) => void);
    placeholder?: string | undefined;
};

export function FormTextInput(props: FormTextInputProps){
    return <View style={formStyles.textInputWrap}>
        <TextInput
            spellCheck={false}
            placeholder={props.placeholder}
            placeholderTextColor={"gray"}
            onChangeText={(value) => props.onChangeText?props.onChangeText(value):null}
            style={formStyles.textInput}
        />
    </View>
}