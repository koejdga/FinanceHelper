import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {useState} from "react";
import {RectButton} from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { violet } from '@/constants/Colors';
import {GestureHandlerRootView} from "react-native-gesture-handler";

export function SimpleLoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    return (
        <GestureHandlerRootView>
            <View style={styles.goodAlign}>
                <View style={styles.textInputWrap}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={"gray"}
                        onChangeText={(value) => setEmail(value)}
                        style={styles.textInput}
                    />
                </View>
                <View style={[styles.hidePasswordTextField, styles.textInputWrap]}>
                    <TextInput
                        secureTextEntry = {!showPassword}
                        placeholder="Password"
                        placeholderTextColor={"gray"}
                        onChangeText={(value) => setPassword(value)}
                        style={[styles.textInput,
                            {borderBottomRightRadius: 0,
                                borderTopRightRadius: 0}]}/>
                    <Ionicons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={30}
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.showIcon}>
                    </Ionicons>
                </View>
                <RectButton
                    onPress={() => {}}
                    style={styles.button}>
                    <Text style={{color: "white"}}>Login</Text>
                </RectButton>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    textInputWrap: {
        width: "100%",
        height: 45,
        borderRadius: 15,
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 15
    },
    textInput: {
        borderRadius: 15,
        opacity: 0.9,
        width: "90%",
        height: "100%",
        padding: 10,
        fontSize: 16,
        borderWidth: 0,
    },
    button: {
        borderRadius: 10,
        fontSize: 18,
        height: 50,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: violet["100"]
    },
    goodAlign: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        height: 180
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
        padding: 3
    }
});
