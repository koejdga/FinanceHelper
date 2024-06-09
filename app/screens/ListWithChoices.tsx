import { useState } from "react";
import { Pressable, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";

const ListWithChoices = ({ route }) => {
  const options = route.params?.options as string[];
  const [checked, setChecked] = useState(0);

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
