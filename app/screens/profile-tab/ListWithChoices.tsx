import ListItem from "@/app/components/one-row/ListItem";
import { ThemeContext, ThemeEnum } from "@/app/enums/ThemeEnum";
import { saveData } from "@/app/utils/SaveLocally";
import { useContext, useEffect, useState } from "react";
import { Text, Pressable, SafeAreaView } from "react-native";

export enum Choises {
  Theme,
}

const ListWithChoices = ({ route, navigation }) => {
  const { setTheme } = useContext(ThemeContext);
  const options = route.params?.options as string[];
  const defaultSelected = (route.params?.defaultSelected as number) || 0;
  const theme = (route.params?.theme as Choises) || 0;
  const [checked, setChecked] = useState(defaultSelected);

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
  };

  useEffect(() => {
    navigation.setOptions({ title: route.params?.title as string });
  }, []);

  return (
    <SafeAreaView>
      {options.map((option, index) => (
        <Pressable
          onPress={() => {
            onChangeFunctions[theme](index);
            setChecked(index);
          }}
          key={"option" + index}
        >
          <ListItem title={option} checked={checked === index} />
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

export default ListWithChoices;
