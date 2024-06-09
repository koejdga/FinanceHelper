import {ScrollView, Text, View} from 'react-native';

import {SimpleLoginForm} from "@/components/SimpleLoginForm";
import {Link} from "expo-router";
import {formContainerStyles} from "@/constants/Styles";
import {SimpleSignUpForm} from "@/components/SimpleSignUpForm";

export default function Login() {
    return (
        <ScrollView>
            <View style={formContainerStyles.alignForm}>
                <Text style={[formContainerStyles.alignCenter, formContainerStyles.title]}>Login</Text>
                <SimpleLoginForm onSubmit={(email, password) => {}}/>
                <Link style={[formContainerStyles.accentBoldText, formContainerStyles.alignCenter]} href={""}>Forgot password?</Link>
                <View style={[{flexDirection: "row"}, formContainerStyles.alignCenter]}>
                    <Text style={formContainerStyles.simpleText}>Don't have an account yet? </Text>
                    <Link style={formContainerStyles.link} href={""}>Sign up</Link>
                </View>
            </View>
        </ScrollView>
    );
}