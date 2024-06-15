import { SimpleLoginForm } from "@/app/components/form-components/SimpleLoginForm";
import { formContainerStyles } from "@/app/constants/Styles";
import { appAuth } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "@firebase/auth";

import { Alert, Pressable, SafeAreaView, Text, View } from "react-native";
import { base } from "../../constants/Colors";
import { FontNames, Fonts } from "../../constants/Fonts";

export default function Login({ navigation }) {
  const navigateToSignUp = () => {
    navigation.navigate("Signup");
  };

  const navigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          console.log("user is logged in");
          navigation.replace(user.emailVerified?"MainApp":"EmailVerification");
        }
      })
      .catch(() => {
        let title = "Something's wrong!";
        let message = "Email or password is incorrect. Check them, please";
        Alert.alert(title, message, [{ text: "OK" }]);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={formContainerStyles.alignForm}>
        <Text
          style={[
            formContainerStyles.alignCenter,
            formContainerStyles.title,
            Fonts[FontNames.TITLE_3],
          ]}
        >
          Login
        </Text>
        <SimpleLoginForm
          onSubmit={(email, password) => {
            signIn(email, password);
          }}
        />
        <Pressable onPress={navigateToForgotPassword}>
          <Text
            style={[
              Fonts[FontNames.TITLE_3],
              formContainerStyles.accentText,
              formContainerStyles.alignCenter,
            ]}
          >
            Forgot password?
          </Text>
        </Pressable>
        <View
          style={[{ flexDirection: "row" }, formContainerStyles.alignCenter]}
        >
          <Text
            style={[Fonts[FontNames.BODY_2], { color: base.light.light20 }]}
          >
            Don't have an account yet?{" "}
          </Text>
          <Pressable onPress={navigateToSignUp}>
            <Text style={[Fonts[FontNames.BODY_2], formContainerStyles.link]}>
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
