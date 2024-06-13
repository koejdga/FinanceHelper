import { useState } from "react";
import { View } from "react-native";
import { Accent } from "../constants/Colors";
import { FontNames, Fonts } from "../constants/Fonts";
import ChooseOneOptionButtons, {
  TransactionOptions,
} from "./ChooseOneOptionButtons";

const ChooseTransaction = ({ style }) => {
  const GAP = 25;
  const [chosenTabHeight, setChosenTabHeight] = useState(0);
  const [selected, setSelected] = useState<string>(
    TransactionOptions.INCOME.toString()
  );

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
