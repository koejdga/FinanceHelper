import { base } from "@/app/constants/Colors";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";

interface Props<T> {
  dictOfPositions: object;
  setDictOfPositions: (tabWidths: object) => void;
  option: string;
  setSelected: (option: string) => void;
  style?: ViewStyle;
  textStyle?: StyleProp<TextStyle>;
}

const ChooseOneOptionButton = <T,>({
  dictOfPositions,
  setDictOfPositions,
  option,
  setSelected,
  style,
  textStyle,
}: Props<T>) => {
  const { dark } = useTheme();

  return (
    <Pressable
      style={style}
      onPress={() => {
        setSelected(option);
        console.log("option");
        console.log(option);
      }}
      onLayout={(event) => {
        const { x, width } = event.nativeEvent.layout;
        setDictOfPositions({
          ...dictOfPositions,
          [option]: { x, width },
        });
      }}
    >
      <Text
        style={[
          { color: dark ? base.light.light60 : base.dark.dark100 },
          textStyle,
        ]}
      >
        {option}
      </Text>
    </Pressable>
  );
};

export default ChooseOneOptionButton;
