import { base } from "@/app/constants/Colors";
import React, { useState } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type Props = {
  variants: { label: string; value: string }[];
  style?: StyleProp<ViewStyle>;
};

const CustomDropdown: React.FC<Props> = ({ variants, style }) => {
  const [value, setValue] = useState(variants[0]);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: "blue" }, style]}
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

export default CustomDropdown;
