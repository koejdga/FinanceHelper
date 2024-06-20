import React from "react";
import CustomDropdown from "../form-components/CustomDropdown";
import OneQuestion from "./OneQuestion";

type Props = {
  question: string;
  variants: { label: string; value: string }[];
  value: { label: string; value: string };
  setValue: (value: { label: string; value: string }) => void;
};

const OneQuestionDropdown: React.FC<Props> = ({
  question,
  variants,
  value,
  setValue,
}) => {
  return (
    <OneQuestion
      question={question}
      inputField={
        <CustomDropdown
          variants={variants}
          style={{ marginTop: 12 }}
          value={value}
          onChange={setValue}
        />
      }
    />
  );
};

export default OneQuestionDropdown;
