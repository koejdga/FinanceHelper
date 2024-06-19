import SettingsRow from "@/app/components/one-row/SettingsRow";
import { SafeAreaView, View } from "react-native";
import { Choises } from "./ListWithChoices";
import { ThemeEnum } from "@/app/enums/ThemeEnum";
import { loadData } from "@/app/utils/SaveLocally";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

const Settings = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [currentTheme, setCurrentTheme] = useState(ThemeEnum.SYSTEM);
  useEffect(() => {
    const init = async () => {
      const loadedTheme = await loadData("theme");
      const currentTheme = loadedTheme || ThemeEnum.SYSTEM;
      setCurrentTheme(currentTheme);
    };

    if (isFocused) init();
  }, [isFocused]);

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
            title: "Currency",
          });
        }}
      />
      <SettingsRow
        title="Language"
        additionalText="English"
        onPress={() => {
          navigation.push("ListWithChoices", {
            options: ["English (EN)", "Ukrainian (UA)"],
            title: "Language",
          });
        }}
      />
      <SettingsRow
        title="Theme"
        additionalText={
          currentTheme === ThemeEnum.SYSTEM ? "System" : currentTheme
        }
        onPress={() => {
          navigation.push("ListWithChoices", {
            theme: Choises.Theme,
            options: Object.values(ThemeEnum),
            defaultSelected: Object.values(ThemeEnum).findIndex(
              (element) => element === currentTheme
            ),
            title: "Theme",
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
