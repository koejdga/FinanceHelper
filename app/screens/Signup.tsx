import { SimpleSignUpForm } from "@/app/components/form-components/SimpleSignUpForm";
import { formContainerStyles } from "@/app/constants/Styles";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { FontNames, Fonts } from "../constants/Fonts";

export default function Signup({ navigation }) {
  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
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
        <SimpleSignUpForm onSubmit={(name, email, password) => {}} />

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
