import { Fonts, FontNames } from "@/app/constants/Fonts";
import React from "react";
import { Text, View } from "react-native";
import CustomDropdown from "../form-components/CustomDropdown";
import { base } from "@/app/constants/Colors";
import { useTheme } from "@react-navigation/native";
import OneQuestion from "./OneQuestion";

type Props = {
  question: string;
  variants: { label: string; value: string }[];
};

const OneQuestionDropdown: React.FC<Props> = ({ question, variants }) => {
  return (
    <OneQuestion
      question={question}
      inputField={
        <CustomDropdown variants={variants} style={{ marginTop: 12 }} />
      }
    />
  );
};

export default OneQuestionDropdown;
