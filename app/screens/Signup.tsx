import {Alert, Pressable, ScrollView, Text, View} from "react-native";
import {SimpleSignUpForm} from "@/app/components/form-components/SimpleSignUpForm";
import {formContainerStyles} from "@/app/constants/Styles";
import {createUserWithEmailAndPassword, updateProfile} from "@firebase/auth";
import {appAuth} from "@/firebaseConfig";

export default function Signup({navigation}) {

    const signUp = (name:string, email: string, password: string) => {
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user,{
                    displayName: name
                }).then(() => {
                    //TODO: add signup handling (at this point user is just signed up)
                });
            })
            .catch(() => {
                let title = "Something's wrong!";
                let message = "Check if your email is not already in use";
                Alert.alert(title, message, [{text: "OK"}]);
            });
    }

    return (
        <ScrollView>
            <View style={formContainerStyles.alignForm}>
                <Text style={[formContainerStyles.alignCenter, formContainerStyles.title]}>Sign Up</Text>
                <SimpleSignUpForm onSubmit={(name, email, password) => {signUp(name, email, password)}}/>
                <View style={[{flexDirection: "row", padding: 12}, formContainerStyles.alignCenter]}>
                    <Text style={formContainerStyles.simpleText}>Already have an account? </Text>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style={formContainerStyles.link}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}