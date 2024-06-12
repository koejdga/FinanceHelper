import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FontNames, Fonts } from "../constants/Fonts";
import { Dropdown } from "react-native-element-dropdown";
import { base } from "../constants/Colors";

type Props = {
  question: string;
  variants: { label: string; value: string }[];
};

const OneQuestionExportData: React.FC<Props> = ({ question, variants }) => {
  const [value, setValue] = useState(variants[0]);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text style={[Fonts[FontNames.BODY_1]]}>{question}</Text>

      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={variants}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: base.light.light60,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 12,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default OneQuestionExportData;
