import {View, Text, Alert} from 'react-native';
import {useState} from "react";
import {BorderlessButton} from "react-native-gesture-handler";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {emailChecker, nameChecker, passwordChecker} from "@/scripts/validation-scripts/login-validation";
import {SecureTextInput} from "@/components/SecureTextInput";
import {formStyles} from "@/constants/Styles";
import {FormTextInput} from "@/components/FormTextInput";

type SignUpFormProps = {
    onSubmit?: (name: string, email: string, password: string) => any;
}

export function SimpleSignUpForm(props: SignUpFormProps) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const requirementsChecker = () => {
        let nameCorrectness = nameChecker(name);
        let emailCorrectness = emailChecker(email);
        let passwordCorrectness = passwordChecker(password);

        if(!nameCorrectness.isValid || !emailCorrectness.isValid || !passwordCorrectness.isValid){
            let message = nameCorrectness.isValid ?
                (passwordCorrectness.isValid?
                    emailCorrectness.message:
                    passwordCorrectness.message)
                :nameCorrectness.message;
            Alert.alert("", message, [{text: "OK"}]);
        }
        else if(props.onSubmit) props.onSubmit(name, email, password);
    }

    return (
        <GestureHandlerRootView>
            <View style={formStyles.container}>
                <FormTextInput
                    placeholder="Name"
                    onChangeText={(value) => setName(value)}/>
                <FormTextInput
                    placeholder="Email"
                    onChangeText={(value) => setEmail(value)}/>
                <SecureTextInput onChangeText={(text) => setPassword(text)}/>
                <BorderlessButton
                    onPress={() => { requirementsChecker()}}
                    style={formStyles.button}>
                    <Text style={{color: "white"}}>Sign Up</Text>
                </BorderlessButton>
            </View>
        </GestureHandlerRootView>
    );
}