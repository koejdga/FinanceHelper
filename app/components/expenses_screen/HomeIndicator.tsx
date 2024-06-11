import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { Accent } from "../../constants/Colors";

const HomeIndicator = ({ dictOfPositions, selected }) => {
  const DURATION = 200;

  const widthAnim = useRef(new Animated.Value(0)).current;
  const marginLeftAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!dictOfPositions[selected]) {
      return;
    }
    Animated.timing(widthAnim, {
      toValue: dictOfPositions[selected].width + 5,
      duration: DURATION,
      useNativeDriver: false,
    }).start();

    Animated.timing(marginLeftAnim, {
      toValue: dictOfPositions[selected].x - 2.5,
      duration: DURATION,
      useNativeDriver: false,
    }).start();
  }, [selected, dictOfPositions]);

  return (
    <Animated.View
      style={{
        height: 5,
        width: widthAnim,
        backgroundColor: Accent[100],
        borderRadius: 2.5,
        marginTop: 3,
        marginLeft: marginLeftAnim,
      }}
    ></Animated.View>
  );
};

export default HomeIndicator;
