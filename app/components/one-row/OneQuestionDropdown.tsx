import React from "react";
import CustomDropdown from "../form-components/CustomDropdown";
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
        <CustomDropdown
          variants={variants}
          style={{ marginTop: 12 }}
          value={{
            label: "",
            value: "",
          }}
        />
      }
    />
  );
};

export default OneQuestionDropdown;
