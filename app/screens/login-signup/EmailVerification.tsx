import {ActivityIndicator, Dimensions, SafeAreaView, Text} from "react-native";
import { FontNames, Fonts } from "../../constants/Fonts";
import {Accent} from "@/app/constants/Colors";
import {formContainerStyles} from "@/app/constants/Styles";
import React, {useEffect} from "react";
import {appAuth} from "@/firebaseConfig";
import {sendEmailVerification} from "@firebase/auth";


const EmailVerification = ({ navigation }) => {
    useEffect(() => {
        const regularCheckVerified = () => {
            appAuth.currentUser.reload().then(() => {
                if (appAuth.currentUser
                    && appAuth.currentUser.emailVerified) {
                    clearInterval(interval);
                    navigation.navigate("MainApp");
                }
            }
        )
        };
        let interval = setInterval( regularCheckVerified, 2000);
    });

    useEffect(() => {
        sendEmailVerification(appAuth.currentUser).then();
    });
    return (
        <SafeAreaView style={{ flex: 1, marginTop: Dimensions.get("window").height*0.2}}>
              <Text style={[Fonts[FontNames.TITLE_2], { marginHorizontal: 16 }]}>
               We've just sent you verification email. Open it and follow the instructions.
              </Text>
            <ActivityIndicator
                size="large"
                color={Accent["100"]}
            style={[formContainerStyles.alignCenter, {marginTop: 80}]}/>
    </SafeAreaView>
);
};

export default EmailVerification;
