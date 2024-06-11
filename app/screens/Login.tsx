import {ScrollView, Text, View} from 'react-native';

import {SimpleLoginForm} from "@/app/components/form-components/SimpleLoginForm";
import {Link} from "expo-router";
import {formContainerStyles} from "@/app/constants/Styles";
import {getAuth, signInWithEmailAndPassword} from "@firebase/auth";
import {firebaseApp} from "@/firebaseConfig";

export default function Login() {
    const signIn = (email: string, password: string) => {
        const auth = getAuth(firebaseApp);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.email);
                console.log(user.uid);
                console.log(user.displayName);
            })
            .catch((error) => {
                console.log("Login was unsuccessful")
            });
    }
  return (
      <ScrollView>
        <View style={formContainerStyles.alignForm}>
          <Text style={[formContainerStyles.alignCenter, formContainerStyles.title]}>Login</Text>
          <SimpleLoginForm onSubmit={(email, password) => {signIn(email, password)}}/>
          <Link style={[formContainerStyles.accentBoldText, formContainerStyles.alignCenter]} href={""}>Forgot password?</Link>
          <View style={[{flexDirection: "row"}, formContainerStyles.alignCenter]}>
            <Text style={formContainerStyles.simpleText}>Don't have an account yet? </Text>
            <Link style={formContainerStyles.link} href={""}>Sign up</Link>
          </View>
        </View>
      </ScrollView>
  );
}