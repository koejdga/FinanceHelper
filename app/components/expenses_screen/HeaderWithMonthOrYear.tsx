import { View, Text } from "react-native";
import React from "react";
import ArrowLeftMainIcon from "../icons/ArrowLeftMainIcon";
import ArrowRightMainIcon from "../icons/ArrowRightMainIcon";
import { FontNames, Fonts } from "../../constants/Fonts";
import { convertNumberToMonthName } from "../../utils/Utils";

type Props = {
  monthNumber?: number;
  year: number;
  showOnlyYear: boolean;
};

const HeaderWithMonthOrYear: React.FC<Props> = ({
  monthNumber,
  year,
  showOnlyYear,
}) => {
  if (year < 2024 || year > new Date().getFullYear()) {
    return <Text>Sorry, wrong year provided</Text>;
  }
  if (monthNumber < 0 || monthNumber > 11) {
    return <Text>Sorry, wrong month provided</Text>;
  }
  if (!showOnlyYear && !monthNumber) {
    return <Text>Sorry, maybe you forgot to provide month</Text>;
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 14,
      }}
    >
      <ArrowLeftMainIcon />
      <Text style={[Fonts[FontNames.TITLE_2]]}>
        {showOnlyYear
          ? year
          : `${convertNumberToMonthName(monthNumber)} ${year}`}
      </Text>
      <ArrowRightMainIcon />
    </View>
  );
};

export default HeaderWithMonthOrYear;
