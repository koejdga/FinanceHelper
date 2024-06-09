import { SafeAreaView, View } from "react-native";
import SettingsRow from "../components/SettingsRow";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView>
      <SettingsRow
        title="Currency"
        additionalText="UAH"
        onPress={() => {
          navigation.push("ListWithChoices", {
            options: [
              "Ukraine (UAH)",
              "United States (USD)",
              "Japan (JPY)",
              "United Kingdom (GDP)",
              "Germany (EUR)",
            ],
          });
        }}
      />
      <SettingsRow
        title="Language"
        additionalText="English"
        onPress={() => {
          navigation.push("ListWithChoices", {
            options: ["English (EN)", "Ukrainian (UA)"],
          });
        }}
      />
      <SettingsRow
        title="Theme"
        additionalText="Light"
        onPress={() => {
          navigation.push("ListWithChoices", {
            options: ["Light", "Dark", "Use device theme"],
          });
        }}
      />
      <View style={{ marginTop: 32 }}></View>
      <SettingsRow
        title="About"
        onPress={() => alert("Put something in About")}
      />
      <SettingsRow
        title="Help"
        onPress={() => alert("Put something in Help")}
      />
    </SafeAreaView>
  );
};

export default Settings;
