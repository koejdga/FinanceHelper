import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Accent, base, red } from "../constants/Colors";
import { FontNames, Fonts } from "../constants/Fonts";
import EditIcon from "../components/icons/EditIcon";
import WalletIcon from "../components/icons/WalletIcon";
import SettingsIcon from "../components/icons/SettingsIcon";
import UploadIcon from "../components/icons/UploadIcon";
import LogoutIcon from "../components/icons/LogoutIcon";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 43,
          marginHorizontal: 34,
          marginBottom: 53,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 8 }}>
          <Text
            style={[Fonts[FontNames.BODY_3], { color: base.light.light20 }]}
          >
            Username
          </Text>
          <Text style={[Fonts[FontNames.TITLE_2], { color: base.dark.dark75 }]}>
            Kate Johnson
          </Text>
        </View>
        <EditIcon color={base.dark.dark50} />
      </View>

      <Pressable
        style={styles.profileRowContainer}
        onPress={() => console.log("account press")}
      >
        <View style={[styles.iconContainer, { backgroundColor: Accent[20] }]}>
          <WalletIcon color={Accent[100]} style={styles.icon} />
        </View>
        <Text style={[Fonts[FontNames.BODY_2], { color: base.dark.dark25 }]}>
          Account
        </Text>
      </Pressable>

      <Pressable
        style={styles.profileRowContainer}
        onPress={() => console.log("settings press")}
      >
        <View style={[styles.iconContainer, { backgroundColor: Accent[20] }]}>
          <SettingsIcon color={Accent[100]} style={styles.icon} />
        </View>
        <Text style={[Fonts[FontNames.BODY_2], { color: base.dark.dark25 }]}>
          Settings
        </Text>
      </Pressable>

      <Pressable
        style={styles.profileRowContainer}
        onPress={() => console.log("export data press")}
      >
        <View style={[styles.iconContainer, { backgroundColor: Accent[20] }]}>
          <UploadIcon color={Accent[100]} style={styles.icon} />
        </View>
        <Text style={[Fonts[FontNames.BODY_2], { color: base.dark.dark25 }]}>
          Export Data
        </Text>
      </Pressable>

      <Pressable
        style={[
          styles.profileRowContainer,
          { borderBottomColor: "#FFF", borderBottomWidth: 1 },
        ]}
        onPress={() => console.log("logout press")}
      >
        <View style={[styles.iconContainer, { backgroundColor: red[10] }]}>
          <LogoutIcon color={red[100]} style={styles.icon} />
        </View>
        <Text style={[Fonts[FontNames.BODY_2], { color: base.dark.dark25 }]}>
          Logout
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  profileRowContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    gap: 9,
    alignItems: "center",
    paddingVertical: 15,
    borderBottomColor: "rgba(0,0,0,0.04)",
    borderBottomWidth: 1,
  },
  iconContainer: {
    borderRadius: 16,
  },
  icon: {
    margin: 20,
  },
});

export default Profile;
