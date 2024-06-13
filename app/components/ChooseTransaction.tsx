import { useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Accent } from "../constants/Colors";
import { FontNames, Fonts } from "../constants/Fonts";
import ChooseOneOptionButtons, {
  TransactionOptions,
} from "./ChooseOneOptionButtons";

type Props = {
  selected: string;
  setSelected: (selected: string) => void;
  style?: StyleProp<ViewStyle>;
};

const ChooseTransaction: React.FC<Props> = ({
  selected,
  setSelected,
  style,
}) => {
  const GAP = 25;
  const [chosenTabHeight, setChosenTabHeight] = useState(0);

  return (
    <View
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        setChosenTabHeight(height);
      }}
      style={style}
    >
      <ChooseOneOptionButtons
        selected={selected}
        setSelected={setSelected}
        enumeration={TransactionOptions}
        style={{
          backgroundColor: Accent[40],
          flexDirection: "row",
          gap: GAP,
          paddingVertical: 6,
          paddingHorizontal: GAP / 2,
          borderRadius: 100,
        }}
        indicatorStyle={{
          backgroundColor: Accent[60],
          position: "absolute",
          height: chosenTabHeight,
          zIndex: -10,
          borderRadius: 100,
        }}
        indicatorPaddingHorizontal={GAP / 2}
        textStyle={[Fonts[FontNames.BODY_1]]}
      />
    </View>
  );
};

export default ChooseTransaction;
