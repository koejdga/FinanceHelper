import { base } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  question: string;
  inputField: JSX.Element;
};

const OneQuestion: React.FC<Props> = ({ question, inputField }) => {
  const { dark } = useTheme();

  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text
        style={[
          Fonts[FontNames.BODY_1],
          { color: dark ? base.light.light80 : base.dark.dark100 },
        ]}
      >
        {question}
      </Text>
      {inputField}
    </View>
  );
};

export default OneQuestion;
