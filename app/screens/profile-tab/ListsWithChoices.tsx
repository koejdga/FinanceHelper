import ListItem from "@/app/components/one-row/ListItem";
import { base } from "@/app/constants/Colors";
import {
  SettingsContext,
  ThemeEnum,
} from "@/app/enums_and_contexts/EnumsAndContexts";
import { saveData } from "@/app/utils/SaveLocally";
import { useContext, useEffect, useState } from "react";
import { View, Text, Pressable, SafeAreaView, ScrollView } from "react-native";

export enum Choises {
  Theme,
  Currency,
}

const ListsWithChoices = ({ route, navigation }) => {
  const mainOptions = route.params?.mainOptions as string[];
  const otherOptions = route.params?.otherOptions as string[];
  const defaultSelected = (route.params?.defaultSelected as number) || 0;
  const topic = (route.params?.topic as Choises) || 0;
  const [checked, setChecked] = useState(defaultSelected);

  console.log(mainOptions);
  const { setTheme, setCurrency } = useContext(SettingsContext);

  if (
    defaultSelected < 0 ||
    defaultSelected >= mainOptions.length + otherOptions.length
  ) {
    return (
      <Text>
        Default delected is wrong, default selected = {defaultSelected}
      </Text>
    );
  }

  const onChangeFunctions = {
    [Choises.Theme]: async (checked: number) => {
      await saveData("theme", mainOptions[checked]);
      setTheme(mainOptions[checked] as ThemeEnum);
    },
    [Choises.Currency]: async (checked: number) => {
      await saveData("currency", mainOptions[checked]);
      setCurrency(mainOptions.concat(otherOptions)[checked]);
    },
  };

  useEffect(() => {
    navigation.setOptions({ title: route.params?.title as string });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {mainOptions.map((option, index) => (
          <Pressable
            onPress={() => {
              onChangeFunctions[topic](index);
              setChecked(index);
            }}
            key={"mainOption" + index}
          >
            <ListItem title={option} checked={checked === index} />
          </Pressable>
        ))}

        <View
          style={{
            borderWidth: 0.5,
            borderColor: base.light.light40,
          }}
        ></View>

        {otherOptions.map((option, index) => (
          <Pressable
            onPress={() => {
              onChangeFunctions[topic](index + mainOptions.length);
              setChecked(index + mainOptions.length);
            }}
            key={"otherOption" + index}
          >
            <ListItem
              title={option}
              checked={checked === index + mainOptions.length}
            />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListsWithChoices;
