import {Alert, SafeAreaView, Text, View} from "react-native";
import RowInProfileScreen from "../components/RowInProfileScreen";
import EditIconProfile from "../components/icons/EditIconProfile";
import LogoutIcon from "../components/icons/LogoutIcon";
import SettingsIcon from "../components/icons/SettingsIcon";
import UploadIcon from "../components/icons/UploadIcon";
import WalletIcon from "../components/icons/WalletIcon";
import { base, red } from "../constants/Colors";
import { FontNames, Fonts } from "../constants/Fonts";
import {appAuth} from "@/firebaseConfig";

const Profile = ({ navigation }) => {
    const logoutProcedure = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "OK",
                    onPress: () => {
                        appAuth.signOut().then(() =>{
                            navigation.replace("Login");
                        });
                    }
                },
                {
                    text: "Cancel",
                    style: "cancel"
                },
            ]
        );
    }

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
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
        <EditIconProfile color={base.dark.dark50} />
      </View>

      <RowInProfileScreen text="Account" Icon={WalletIcon} />
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
          onPress={logoutProcedure}
        text="Logout"
        Icon={LogoutIcon}
        color={red[100]}
        backgroundColor={red[10]}
      />
    </SafeAreaView>
  );
};

export default Profile;
