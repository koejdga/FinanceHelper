import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import EditIcon from "./EditIcon";

const WigglyEditIcon = () => {
  const rotation = useRef(new Animated.Value(0)).current;
  const DURATION = 500;

  useEffect(() => {
    const startWiggle = () => {
      Animated.sequence([
        Animated.timing(rotation, {
          toValue: 1,
          duration: DURATION / 2,
          useNativeDriver: true,
        }),
        Animated.timing(rotation, {
          toValue: -1,
          duration: DURATION / 2,
          useNativeDriver: true,
        }),
      ]).start(() => {
        startWiggle();
      });
    };

    startWiggle();
  }, [rotation]);

  const rotate = rotation.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-10deg", "10deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <EditIcon />
    </Animated.View>
  );
};

export default WigglyEditIcon;
