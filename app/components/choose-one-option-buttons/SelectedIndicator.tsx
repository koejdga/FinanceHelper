import { useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";

type Props = {
  dictOfPositions: object;
  paddingHorizontal?: number;
  selected: string;
  style?: ViewStyle;
};

const SelectedIndicator: React.FC<Props> = ({
  dictOfPositions,
  paddingHorizontal = 0,
  selected,
  style,
}) => {
  const DURATION = 200;

  const widthAnim = useRef(new Animated.Value(0)).current;
  const marginLeftAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!dictOfPositions[selected]) {
      return;
    }
    Animated.timing(widthAnim, {
      toValue: dictOfPositions[selected].width + paddingHorizontal * 2,
      duration: DURATION,
      useNativeDriver: false,
    }).start();

    Animated.timing(marginLeftAnim, {
      toValue: dictOfPositions[selected].x - paddingHorizontal,
      duration: DURATION,
      useNativeDriver: false,
    }).start();
  }, [selected, dictOfPositions]);

  return (
    <Animated.View
      style={[
        {
          width: widthAnim,
          marginLeft: marginLeftAnim,
        },
        style,
      ]}
    ></Animated.View>
  );
};

export default SelectedIndicator;
