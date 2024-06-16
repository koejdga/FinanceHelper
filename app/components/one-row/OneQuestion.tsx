import { Fonts, FontNames } from "@/app/constants/Fonts";
import React from "react";
import { Text, View } from "react-native";
import CustomDropdown from "../form-components/CustomDropdown";
import { base } from "@/app/constants/Colors";
import { useTheme } from "@react-navigation/native";

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
