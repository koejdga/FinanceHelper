import FormTextInput from "@/app/components/form-components/FormTextInput";
import CheckIcon from "@/app/components/icons/CheckIcon";
import RowInProfileScreen from "@/app/components/one-row/RowInProfileScreen";
import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import EditIconProfile from "../../components/icons/EditIconProfile";
import LogoutIcon from "../../components/icons/LogoutIcon";
import SettingsIcon from "../../components/icons/SettingsIcon";
import UploadIcon from "../../components/icons/UploadIcon";
import { base, red } from "../../constants/Colors";
import { FontNames, Fonts } from "../../constants/Fonts";

const Profile = ({ navigation }) => {
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("Kate Johnson");

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <View
        style={[
          styles.header,
          editMode ? { gap: 30 } : { justifyContent: "space-between" },
        ]}
      >
        {!editMode && (
          <>
            <View style={{ gap: 8 }}>
              <Text
                style={[Fonts[FontNames.BODY_3], { color: base.light.light20 }]}
              >
                Username
              </Text>
              <Text
                style={[Fonts[FontNames.TITLE_2], { color: base.dark.dark75 }]}
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
            <Pressable onPress={() => setEditMode(false)}>
              <CheckIcon color={base.light.light20} size={30} />
            </Pressable>
          </>
        )}
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
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 43,
    marginHorizontal: 34,
    marginBottom: 53,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Profile;
