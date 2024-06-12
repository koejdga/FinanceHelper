import {StyleSheet} from "react-native";
import {Accent} from "@/app/constants/Colors";
import {FontNames, Fonts} from "./Fonts";
import {FONT_TYPES} from "expo-asset/plugin/build/utils";

export const formStyles = StyleSheet.create({
    textInputWrap: {
        width: "100%",
        height: 55,
        borderRadius: 15,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 20
    },
    textInput: {
        borderRadius: 15,
        opacity: 0.9,
        width: "100%",
        height: "100%",
        padding: 10,
        fontSize: 16,
        borderWidth: 0,
    },
    button: {
        ...Fonts[FontNames.TITLE_3],
        ...{
            borderRadius: 10,
            height: 60,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Accent["100"]
        }
    },
    buttonText: {
        ...Fonts[FontNames.BODY_1],
        ...{
             color: "white"
        }
    },
    container: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    hidePasswordTextField: {
        flexDirection: "row",
        width: "100%",
        flex: 1
    },
    showIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 8
    }
});

export const formContainerStyles = StyleSheet.create({
    alignForm: {
        marginTop: "30%",
        height: "60%"
    },
    alignCenter: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    title: {
        ...Fonts[FontNames.TITLE_2],
        ...{
        padding: 20
    }},
    accentBoldText: {
        ...Fonts[FontNames.TITLE_3],
        ...{
            fontWeight: "bold",
            color: Accent["100"],
         padding: 40
        }
    },
    simpleText: Fonts[FontNames.BODY_2],
    link: {
        color: Accent["100"],
        fontSize: 16,
        textDecorationLine: "underline"
    }
});