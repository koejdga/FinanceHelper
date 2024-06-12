import {Alert, Pressable, ScrollView, Text, View} from 'react-native';

import {SimpleLoginForm} from "@/app/components/form-components/SimpleLoginForm";
import {Link} from "expo-router";
import {formContainerStyles} from "@/app/constants/Styles";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {appAuth} from "@/firebaseConfig";

export default function Login({navigation }) {
    const signIn = (email: string, password: string) => {
        signInWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                //TODO: add login handling (at this point user is just logged in)
            })
            .catch(() => {
                let title = "Something's wrong!";
                let message = "Email or password is incorrect. Check them, please";
                Alert.alert(title, message, [{text: "OK"}]);
            });
    }
  return (
      <ScrollView>
          <View style={formContainerStyles.alignForm}>
              <Text style={[formContainerStyles.alignCenter, formContainerStyles.title]}>Login</Text>
              <SimpleLoginForm onSubmit={(email, password) => {signIn(email, password)}}/>
              <Pressable onPress={() => navigation.navigate("ResetPassword")}>
                  <Text style={[formContainerStyles.accentBoldText, formContainerStyles.alignCenter]}>Forgot password?</Text>
              </Pressable>
              <View style={[{flexDirection: "row"}, formContainerStyles.alignCenter]}>
                  <Text style={formContainerStyles.simpleText}>Don't have an account yet? </Text>
                  <Pressable onPress={() => navigation.navigate("Signup")}>
                      <Text style={formContainerStyles.link}>Sign up</Text>
                  </Pressable>
              </View>
          </View>
      </ScrollView>
  );
}