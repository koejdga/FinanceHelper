import { Accent } from "@/app/constants/Colors";
import { formContainerStyles } from "@/app/constants/Styles";
import { appAuth } from "@/firebaseConfig";
import { sendEmailVerification } from "@firebase/auth";
import { useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  Text,
} from "react-native";
import { FontNames, Fonts } from "../../constants/Fonts";
import { createUser } from "@/app/utils/ServerCommunication";

const EmailVerification = ({ navigation }) => {
  useEffect(() => {
    const regularCheckVerified = () => {
      appAuth.currentUser.reload().then(async () => {
        if (appAuth.currentUser && appAuth.currentUser.emailVerified) {
          console.log("creating user");
          clearInterval(interval);
          const created = await createUser(appAuth.currentUser.uid);
          if (created) {
            navigation.navigate("MainApp");
          }
        }
      });
    };
    let interval = setInterval(regularCheckVerified, 2000);
  });

  useEffect(() => {
    sendEmailVerification(appAuth.currentUser).then();
  });
  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: Dimensions.get("window").height * 0.2 }}
    >
      <Text style={[Fonts[FontNames.TITLE_2], { marginHorizontal: 16 }]}>
        We've just sent you verification email. Open it and follow the
        instructions.
      </Text>
      <ActivityIndicator
        size="large"
        color={Accent["100"]}
        style={[formContainerStyles.alignCenter, { marginTop: 80 }]}
      />
    </SafeAreaView>
  );
};

export default EmailVerification;
