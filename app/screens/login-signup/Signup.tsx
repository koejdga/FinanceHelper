import { SimpleSignUpForm } from "@/app/components/form-components/SimpleSignUpForm";
import { formContainerStyles } from "@/app/constants/Styles";
import { Pressable, SafeAreaView, Text, View, Alert } from "react-native";
import { FontNames, Fonts } from "../../constants/Fonts";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { appAuth } from "@/firebaseConfig";

export default function Signup({ navigation }) {
  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  const signUp = (name: string, email: string, password: string) => {
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
        }).then(() => {
          console.log("user is signed in");
          navigation.navigate("Login");
          //TODO: add signup handling (at this point user is just signed up)
        });
      })
      .catch(() => {
        let title = "Something's wrong!";
        let message = "Check if your email is not already in use";
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
          Sign Up
        </Text>
        <SimpleSignUpForm
          onSubmit={(name, email, password) => {
            signUp(name, email, password);
          }}
        />

        <View
          style={[{ flexDirection: "row" }, formContainerStyles.alignCenter]}
        >
          <Text
            style={[Fonts[FontNames.BODY_2], formContainerStyles.simpleText]}
          >
            Already have an account?{" "}
          </Text>
          <Pressable onPress={navigateToLogin}>
            <Text style={[Fonts[FontNames.BODY_2], formContainerStyles.link]}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
