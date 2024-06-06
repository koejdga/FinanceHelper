import {StyleSheet, Text, View} from 'react-native';

import {SimpleLoginForm} from "@/components/SimpleLoginForm";
import {violet} from "@/constants/Colors";
import {Link} from "expo-router";

export default function Login() {
    return (
        <View style={styles.alignForm}>
            <Text style={[styles.alignCenter, styles.bigFont]}>Login</Text>
            <SimpleLoginForm/>
            <Link style={[styles.violetBoldText, styles.alignCenter]} href={""}>Forgot password?</Link>
            <View style={[{flexDirection: "row"}, styles.alignCenter]}>
                <Text style={styles.simpleText}>Don't have an account yet? </Text>
                <Link style={styles.link} href={""}>Sign up</Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    alignForm: {
        marginTop: "30%",
        height: "60%"
    },
    alignCenter: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    bigFont: {
        fontSize: 22,
        padding: 20
    },
    violetBoldText: {
        fontSize: 18,
        fontWeight: "bold",
        color: violet["100"],
        padding: 40
    },
    simpleText: {
        fontSize: 16,
    },
    link: {
        color: violet["100"],
        fontSize: 16
    }
});