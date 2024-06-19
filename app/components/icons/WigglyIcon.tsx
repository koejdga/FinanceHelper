import { useEffect, useRef } from "react";
import { Animated } from "react-native";

type Props = {
  icon: JSX.Element;
};

const WigglyIcon: React.FC<Props> = ({ icon }) => {
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
    <Animated.View style={{ transform: [{ rotate }] }}>{icon}</Animated.View>
  );
};

export default WigglyIcon;
