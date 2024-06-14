import { Accent, base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { useTheme } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  onPress?: () => void;
  text: string;
  color?: string;
  backgroundColor?: string;
  Icon: React.ComponentType<{ color?: string; style?: object }>;
};

const RowInProfileScreen: React.FC<Props> = ({
  onPress,
  text,
  color,
  backgroundColor,
  Icon,
}) => {
  const { dark } = useTheme();

  return (
    <Pressable style={styles.profileRowContainer} onPress={onPress}>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: backgroundColor || Accent[20] },
        ]}
      >
        <Icon color={color || Accent[100]} style={styles.icon} />
      </View>
      <Text
        style={[
          Fonts[FontNames.BODY_2],
          { color: dark ? base.light.light60 : base.dark.dark25 },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  profileRowContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    gap: 9,
    alignItems: "center",
    paddingVertical: 15,
    borderBottomColor: "rgba(0,0,0,0.04)",
    borderBottomWidth: 1,
  },
  iconContainer: {
    borderRadius: 16,
  },
  icon: {
    margin: 20,
  },
});

export default RowInProfileScreen;
