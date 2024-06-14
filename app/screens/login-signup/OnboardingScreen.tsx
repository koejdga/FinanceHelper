import CustomButton, {
  ButtonType,
} from "@/app/components/buttons/CustomButton";
import ThreeDots from "@/app/components/three-dots/ThreeDots";
import { base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import {useEffect, useState} from "react";
import {onAuthStateChanged} from "@firebase/auth";
import {appAuth} from "@/firebaseConfig";
import * as SplashScreen from "expo-splash-screen";

export type ScreenNumber = 1 | 2 | 3;

const ScreenDetails = [
  {
    photo: require("@/app/assets/images/onboarding-screens/photo-1.jpg"),
    title: "Gain total control of your money",
    body: "Become your own money manager and make every cent count",
  },
  {
    photo: require("@/app/assets/images/onboarding-screens/photo-2.jpg"),
    title: "Know where your money goes",
    body: "Track your transaction easily, with categories and financial report ",
  },
  {
    photo: require("@/app/assets/images/onboarding-screens/photo-3.jpg"),
    title: "Planning ahead",
    body: "Setup your budget for each category so you in control",
  },
] as const;

const OnboardingScreen = ({ route, navigation }) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    onAuthStateChanged(appAuth, (user) => {
      if (user) {
        navigation.replace("MainApp");
      }
      setLoaded(true);
    });
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync().then(r => {});
    }
  }, [loaded]);

  const screenNumber = route.params?.screenNumber as ScreenNumber;
  const { width } = useWindowDimensions();
  const SCREEN_WIDTH = width;
  const IMAGE_PADDING = 24;
  const IMAGE_WIDTH = SCREEN_WIDTH - IMAGE_PADDING * 2;

  return (!loaded?null:
    <SafeAreaView style={styles.container}>
      <Pressable
        style={{ alignItems: "center", flex: 1 }}
        onPress={() => {
          if (screenNumber === ScreenDetails.length) {
            navigation.push("Login");
          } else {
            navigation.push("OnboardingScreen", {
              screenNumber: screenNumber + 1,
            });
          }
        }}
      >
        <Image
          style={[styles.image, { width: IMAGE_WIDTH, height: IMAGE_WIDTH }]}
          source={ScreenDetails[screenNumber - 1].photo}
        ></Image>
        <View style={styles.textSection}>
          <Text
            style={[
              Fonts[FontNames.TITLE_1],
              { color: base.dark.dark50, textAlign: "center" },
            ]}
          >
            {ScreenDetails[screenNumber - 1].title}
          </Text>
          <Text
            style={[
              Fonts[FontNames.BODY_1],
              {
                color: base.light.light20,
                textAlign: "center",
                paddingTop: 20,
              },
            ]}
          >
            {ScreenDetails[screenNumber - 1].body}
          </Text>
        </View>
        <ThreeDots style={{ paddingVertical: 33 }} bigNumber={screenNumber} />
        <CustomButton
          title="Sign Up"
          onPress={() => {
            navigation.push("Signup");
          }}
        />
        <CustomButton
          title="Login"
          type={ButtonType.SECONDARY}
          onPress={() => {
            navigation.push("Login");
          }}
        />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textSection: {
    paddingHorizontal: 42,
    flex: 1,
  },
  image: {
    marginTop: 27,
    marginBottom: 44,
  },
});

export default OnboardingScreen;
