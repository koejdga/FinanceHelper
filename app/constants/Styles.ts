import { Accent, base } from "@/app/constants/Colors";
import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
  textInputWrap: {
    marginHorizontal: 16,
    height: 55,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: base.light.light60,
    alignItems: "center",
  },
  textInput: {
    borderRadius: 15,
    opacity: 0.9,
    width: "100%",
    height: "100%",
    padding: 16,
    fontSize: 16,
    lineHeight: 18,
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
    height: "60%",
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
