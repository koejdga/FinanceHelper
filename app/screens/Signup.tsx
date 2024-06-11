import {ScrollView, Text, View} from "react-native";
import {Link} from "expo-router";
import {SimpleSignUpForm} from "@/app/components/form-components/SimpleSignUpForm";
import {formContainerStyles} from "@/app/constants/Styles";
import {createUserWithEmailAndPassword, getAuth} from "@firebase/auth";
import {firebaseApp} from "@/firebaseConfig";

export default function Signup() {

    const signUp = (email: string, password: string) => {
        const auth = getAuth(firebaseApp);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.email);
                console.log(user.uid);
            })
            .catch((error) => {
                console.log("Login was unsuccessful")
            });
    }

    return (
        <ScrollView>
            <View style={formContainerStyles.alignForm}>
                <Text style={[formContainerStyles.alignCenter, formContainerStyles.title]}>Sign Up</Text>
                <SimpleSignUpForm onSubmit={(name, email, password) => {signUp(email, password)}}/>
                <View style={[{flexDirection: "row", padding: 12}, formContainerStyles.alignCenter]}>
                    <Text style={formContainerStyles.simpleText}>Already have an account? </Text>
                    <Link style={formContainerStyles.link} href={""}>Login</Link>
                </View>
            </View>
        </ScrollView>
    );
}