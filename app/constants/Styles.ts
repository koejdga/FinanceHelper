import { Accent, base } from "@/app/constants/Colors";
import { Dimensions, StyleSheet } from "react-native";
import { FontNames, Fonts } from "./Fonts";

export const formStyles = StyleSheet.create({
  textInputWrap: {
    marginHorizontal: 16,
    height: 55,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: base.light.light60,
  },
  textInput: {
    ...Fonts[FontNames.BODY_4],
    ...{
      borderRadius: 15,
      opacity: 0.9,
      width: "100%",
      height: "100%",
      padding: 16,
    },
  },
  button: {
    borderRadius: 16,
    paddingVertical: 17,
    alignItems: "center",
    backgroundColor: Accent["100"],
  },
  hidePasswordTextField: {
    flexDirection: "row",
  },
});

export const formContainerStyles = StyleSheet.create({
  alignForm: {
    height: Dimensions.get('window').height * 0.6,
  },
  alignCenter: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  simpleText: {
    color: base.light.light20,
  },
  title: {
    paddingTop: 16,
    marginBottom: 72,
  },
  accentText: {
    color: Accent["100"],
    paddingTop: 33,
    paddingBottom: 38,
  },
  link: {
    color: Accent["100"],
    textDecorationLine: "underline",
  },
});
