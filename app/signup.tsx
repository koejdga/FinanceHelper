import {ScrollView, Text, View} from "react-native";
import {formContainerStyles} from "@/constants/Styles";
import {Link} from "expo-router";
import {SimpleSignUpForm} from "@/components/SimpleSignUpForm";

export default function SignUp() {
    return (
        <ScrollView>
            <View style={formContainerStyles.alignForm}>
                <Text style={[formContainerStyles.alignCenter, formContainerStyles.title]}>Sign Up</Text>
                <SimpleSignUpForm onSubmit={(name, email, password) => {}}/>
                <View style={[{flexDirection: "row", padding: 12}, formContainerStyles.alignCenter]}>
                    <Text style={formContainerStyles.simpleText}>Already have an account? </Text>
                    <Link style={formContainerStyles.link} href={""}>Login</Link>
                </View>
            </View>
        </ScrollView>
    );
}