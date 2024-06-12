import {TextInput, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useState} from "react";
import {formStyles} from "@/app/constants/Styles";

type SecureTextProps = {
    onChangeText?: ((text: string) => void);
};

export function SecureTextInput(props: SecureTextProps){
    const [showPassword, setShowPassword] = useState(false);

    return <View style={[formStyles.hidePasswordTextField, formStyles.textInputWrap]}>
        <TextInput
            spellCheck={false}
            secureTextEntry = {!showPassword}
            placeholder="Password"
            placeholderTextColor={"gray"}
            onChangeText={(value) => props.onChangeText?props.onChangeText(value):null}

            style={[formStyles.textInput,
                {borderBottomRightRadius: 0,
                    borderTopRightRadius: 0,
                width: "88%"}]}/>
        <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={30}
            onPress={() => setShowPassword(!showPassword)}
            style={formStyles.showIcon}>
        </Ionicons>
    </View>
}