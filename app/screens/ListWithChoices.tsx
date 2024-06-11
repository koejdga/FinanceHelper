import { useEffect, useState } from "react";
import { Pressable, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";

const ListWithChoices = ({ route, navigation }) => {
  const options = route.params?.options as string[];
  const [checked, setChecked] = useState(0);

  useEffect(() => {
    navigation.setOptions({ title: route.params?.title as string });
  }, []);

  return (
    <SafeAreaView>
      {options.map((option, index) => (
        <Pressable onPress={() => setChecked(index)} key={"option" + index}>
          <ListItem title={option} checked={checked === index} />
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

export default ListWithChoices;
