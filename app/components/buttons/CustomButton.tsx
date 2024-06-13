import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { Accent, base } from "../../constants/Colors";
import { FontNames, Fonts } from "../../constants/Fonts";

export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

type Props = {
  onPress?: () => void;
  type?: ButtonType;
  title: string;
  style?: StyleProp<ViewStyle>;
};

const CustomButton: React.FC<Props> = ({
  onPress,
  type = ButtonType.PRIMARY,
  title,
  style,
}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text
        style={[
          Fonts[FontNames.TITLE_3],
          styles.buttonText,
          {
            backgroundColor:
              type === ButtonType.PRIMARY ? Accent[100] : Accent[20],
            color:
              type === ButtonType.PRIMARY ? base.light.light80 : Accent[100],
          },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    width: "100%",
    paddingBottom: 16,
  },
  buttonText: {
    borderRadius: 16,
    overflow: "hidden",
    textAlign: "center",
    paddingVertical: 17,
  },
});

export default CustomButton;
