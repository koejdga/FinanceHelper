import FormTextInput from "@/app/components/form-components/FormTextInput";
import CheckIcon from "@/app/components/icons/CheckIcon";
import RowInProfileScreen from "@/app/components/one-row/RowInProfileScreen";
import { useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import EditIconProfile from "../../components/icons/EditIconProfile";
import LogoutIcon from "../../components/icons/LogoutIcon";
import SettingsIcon from "../../components/icons/SettingsIcon";
import UploadIcon from "../../components/icons/UploadIcon";
import { base, red } from "../../constants/Colors";
import { FontNames, Fonts } from "../../constants/Fonts";
import { useTheme } from "@react-navigation/native";
import { appAuth } from "@/firebaseConfig";
import { nameChecker } from "@/app/utils/validation-scripts/login-validation";
import { updateProfile } from "@firebase/auth";

const Profile = ({ navigation }) => {
  const { dark } = useTheme();
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState(appAuth.currentUser.displayName);
  const [email, setEmail] = useState(appAuth.currentUser.email);

  const logoutProcedure = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "OK",
        onPress: () => {
          appAuth.signOut().then(() => {
            navigation.replace("Login");
          });
        },
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  const changeUsername = (username: string) => {
    const nameCheck = nameChecker(username);
    if (!nameCheck.isValid) setUsername(appAuth.currentUser.displayName);
    else {
      updateProfile(appAuth.currentUser, {
        displayName: username,
      }).then();
    }
  };

  return (
    <SafeAreaView>
      <View style={[styles.header, { gap: 10 }]}>
        <View
          style={[
            { flexDirection: "row" },
            editMode ? { gap: 30 } : { justifyContent: "space-between" },
          ]}
        >
          {!editMode && (
            <>
              <View style={{ gap: 8 }}>
                <Text
                  style={[
                    Fonts[FontNames.BODY_3],
                    { color: dark ? base.light.light60 : base.light.light20 },
                  ]}
                >
                  Username
                </Text>
                <Text
                  style={[
                    Fonts[FontNames.TITLE_2],
                    { color: dark ? base.light.light80 : base.dark.dark75 },
                  ]}
                >
                  {username}
                </Text>
              </View>
              <Pressable onPress={() => setEditMode(true)}>
                <EditIconProfile color={base.dark.dark50} />
              </Pressable>
            </>
          )}

          {editMode && (
            <>
              <FormTextInput
                placeholder="Enter username..."
                value={username}
                onChangeText={(value) => setUsername(value)}
                style={{ flex: 1, marginHorizontal: 0, marginBottom: 0 }}
              />
              <Pressable
                onPress={() => {
                  setEditMode(false);
                  changeUsername(username);
                }}
              >
                <CheckIcon color={base.light.light20} size={30} />
              </Pressable>
            </>
          )}
        </View>

        <View>
          <Text
            style={[Fonts[FontNames.BODY_1], { color: base.light.light20 }]}
          >
            {email}
          </Text>
        </View>
      </View>

      <RowInProfileScreen
        text="Settings"
        Icon={SettingsIcon}
        onPress={() => {
          navigation.push("Settings");
        }}
      />
      <RowInProfileScreen
        text="Export Data"
        Icon={UploadIcon}
        onPress={() => {
          navigation.push("ExportData");
        }}
      />
      <RowInProfileScreen
        text="Logout"
        Icon={LogoutIcon}
        color={red[100]}
        backgroundColor={red[10]}
        onPress={logoutProcedure}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 43,
    marginHorizontal: 34,
    marginBottom: 53,
  },
});

export default Profile;
