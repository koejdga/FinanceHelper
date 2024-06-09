import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Accent, base } from "../constants/Colors";
import { FontNames, Fonts } from "../constants/Fonts";

export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

type Props = {
  onPress?: () => void;
  type?: ButtonType;
  title: string;
};

const CustomButton: React.FC<Props> = ({
  onPress,
  type = ButtonType.PRIMARY,
  title,
}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
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
