import SettingsRow from "@/app/components/one-row/SettingsRow";
import { SafeAreaView, View } from "react-native";
import { Choises } from "./ListWithChoices";
import { loadData } from "@/app/utils/SaveLocally";
import { useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  SettingsContext,
  ThemeEnum,
} from "@/app/enums_and_contexts/EnumsAndContexts";
import { Currency } from "@/app/utils/Interfaces";

// [
//   "Ukraine (UAH)",
//   "United States (USD)",
//   "Japan (JPY)",
//   "United Kingdom (GDP)",
//   "Germany (EUR)",
// ],

const Settings = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [currentTheme, setCurrentTheme] = useState(ThemeEnum.SYSTEM);
  const { currency, allCurrencies } = useContext(SettingsContext);
  const mostPopularCurrencies = ["UAH", "EUR", "USD", "GBP", "JPY"];

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
        additionalText={currency}
        onPress={() => {
          navigation.push("ListsWithChoices", {
            topic: Choises.Currency,
            mainOptions: mostPopularCurrencies,
            otherOptions: allCurrencies
              .map((c: Currency) => c.cc.toUpperCase())
              .filter((c: string) => !mostPopularCurrencies.includes(c)),
            defaultSelected: allCurrencies.findIndex(
              (elem: Currency) =>
                elem.cc.toUpperCase() === currency.toUpperCase()
            ),
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
            topic: Choises.Theme,
            options: Object.values(ThemeEnum),
            defaultSelected: Object.values(ThemeEnum).findIndex(
              (elem) => elem === currentTheme
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
