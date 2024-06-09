import {View, Text, Alert} from 'react-native';
import {useState} from "react";
import {BorderlessButton} from "react-native-gesture-handler";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {emailChecker, passwordChecker} from "@/scripts/validation-scripts/login-validation";
import {SecureTextInput} from "@/components/SecureTextInput";
import {formStyles} from "@/constants/Styles";
import {FormTextInput} from "@/components/FormTextInput";

type LoginFormProps = {
    onSubmit?: (email: string, password: string) => any;
}

export function SimpleLoginForm(props: LoginFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const requirementsChecker = () => {
        let emailCorrectness = emailChecker(email);
        let passwordCorrectness = passwordChecker(password);
        if(!emailCorrectness.isValid || !passwordCorrectness.isValid){
            let message = emailCorrectness.isValid ? passwordCorrectness.message:emailCorrectness.message;
            Alert.alert("", message, [{text: "OK"}]);
        }
        else if(props.onSubmit) props.onSubmit(email, password);
    }

    return (
        <GestureHandlerRootView>
            <View style={formStyles.container}>
                <FormTextInput
                    placeholder="Email"
                    onChangeText={(value) => setEmail(value)}/>
                <SecureTextInput onChangeText={(text) => setPassword(text)}/>
                <BorderlessButton
                    onPress={() => { requirementsChecker()}}
                    style={formStyles.button}>
                    <Text style={{color: "white"}}>Login</Text>
                </BorderlessButton>
            </View>
        </GestureHandlerRootView>
    );
}