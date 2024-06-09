import {StyleSheet} from "react-native";
import {Fonts} from "@/constants/Fonts";
import {accent} from "@/constants/Colors";

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
        width: "90%",
        height: "100%",
        padding: 10,
        fontSize: Fonts.body1.size,
        borderWidth: 0,
    },
    button: {
        borderRadius: 10,
        fontSize: Fonts.title3.size,
        height: 60,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: accent["100"]
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
        padding: 4
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
        fontSize: 22,
        padding: 20
    },
    accentBoldText: {
        fontSize: 18,
        fontWeight: "bold",
        color: accent["100"],
        padding: 40
    },
    simpleText: {
        fontSize: 16,
    },
    link: {
        color: accent["100"],
        fontSize: 16,
        textDecorationLine: "underline"
    }
});