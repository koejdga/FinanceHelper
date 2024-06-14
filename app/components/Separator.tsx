import { useTheme } from "@react-navigation/native";
import { View } from "react-native";

const Separator = () => {
  const { dark } = useTheme();

  return (
    <View
      style={{
        borderBottomWidth: 1,
        height: 5,
        borderColor: dark ? "rgba(256, 256, 256, 0.5)" : "rgba(0, 0, 0, 0.5)",
      }}
    ></View>
  );
};

export default Separator;
