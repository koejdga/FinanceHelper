import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";

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
      <Text style={textStyle}>{option}</Text>
    </Pressable>
  );
};

export default ChooseOneOptionButton;
