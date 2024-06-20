import ListItem from "@/app/components/one-row/ListItem";
import {
  SettingsContext,
  ThemeEnum,
} from "@/app/enums_and_contexts/EnumsAndContexts";
import { saveData } from "@/app/utils/SaveLocally";
import { useContext, useEffect, useState } from "react";
import { Text, Pressable, SafeAreaView, ScrollView } from "react-native";

export enum Choises {
  Theme,
  Currency,
}

const ListWithChoices = ({ route, navigation }) => {
  const options = route.params?.options as string[];
  const defaultSelected = (route.params?.defaultSelected as number) || 0;
  const topic = (route.params?.topic as Choises) || 0;
  const [checked, setChecked] = useState(defaultSelected);

  const { setTheme, setCurrency } = useContext(SettingsContext);

  if (defaultSelected < 0 || defaultSelected >= options.length) {
    return (
      <Text>
        Default delected is wrong, default selected = {defaultSelected}
      </Text>
    );
  }

  const onChangeFunctions = {
    [Choises.Theme]: async (checked: number) => {
      await saveData("theme", options[checked]);
      setTheme(options[checked] as ThemeEnum);
    },
    [Choises.Currency]: async (checked: number) => {
      await saveData("currency", options[checked]);
      setCurrency(options[checked]);
    },
  };

  useEffect(() => {
    navigation.setOptions({ title: route.params?.title as string });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {options.map((option, index) => (
          <Pressable
            onPress={() => {
              onChangeFunctions[topic](index);
              setChecked(index);
            }}
            key={"option" + index}
          >
            <ListItem title={option} checked={checked === index} />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListWithChoices;
