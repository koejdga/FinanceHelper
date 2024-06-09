import { SafeAreaView, View } from "react-native";
import SettingsRow from "../components/SettingsRow";

const Settings = () => {
  return (
    <SafeAreaView>
      <SettingsRow title="Currency" additionalText="UAH" />
      <SettingsRow title="Language" additionalText="English" />
      <SettingsRow title="Theme" additionalText="Light" />
      <View style={{ marginTop: 32 }}></View>
      <SettingsRow title="About" />
      <SettingsRow title="Help" />
    </SafeAreaView>
  );
};

export default Settings;
