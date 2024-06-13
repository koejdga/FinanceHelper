import React from "react";
import { Text, View } from "react-native";
import { FontNames, Fonts } from "../constants/Fonts";
import CustomDropdown from "./form-components/CustomDropdown";

type Props = {
  question: string;
  variants: { label: string; value: string }[];
};

const OneQuestionExportData: React.FC<Props> = ({ question, variants }) => {
  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text style={[Fonts[FontNames.BODY_1]]}>{question}</Text>
      <CustomDropdown variants={variants} style={{ marginTop: 12 }} />
    </View>
  );
};

export default OneQuestionExportData;
