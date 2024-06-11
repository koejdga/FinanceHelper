import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import ArrowLeftMainIcon from "../icons/ArrowLeftMainIcon";
import ArrowRightMainIcon from "../icons/ArrowRightMainIcon";
import { FontNames, Fonts } from "../../constants/Fonts";
import { convertNumberToMonthName } from "../../utils/Utils";

type Props = {
  monthNumber?: number;
  setMonthNumber?: (monthNumber: number) => void;
  year: number;
  setYear: (year: number) => void;
  showOnlyYear: boolean;
};

const HeaderWithMonthOrYear: React.FC<Props> = ({
  monthNumber,
  setMonthNumber,
  year,
  setYear,
  showOnlyYear,
}) => {
  const MIN_YEAR = 2021;
  const MAX_YEAR = new Date().getFullYear();

  const [canGoLeft, setCanGoLeft] = useState(true);
  const [canGoRight, setCanGoRight] = useState(true);

  if (year < MIN_YEAR || year > new Date().getFullYear()) {
    return <Text>Sorry, wrong year provided</Text>;
  }
  if (monthNumber < 0 || monthNumber > 11) {
    return <Text>Sorry, wrong month provided</Text>;
  }
  if (!showOnlyYear && (monthNumber === undefined || monthNumber === null)) {
    return <Text>Sorry, maybe you forgot to provide month</Text>;
  }
  if (!showOnlyYear && !setMonthNumber) {
    return <Text>Sorry, maybe you forgot to provide setMonth function</Text>;
  }

  const goLeft = () => {
    setCanGoRight(true);
    if (!showOnlyYear) {
      if (monthNumber === 0 && year === MIN_YEAR) {
        setCanGoLeft(false);
        return;
      }

      const newMonthNumber = monthNumber > 0 ? monthNumber - 1 : 11;

      setMonthNumber(newMonthNumber);
      setYear(monthNumber > 0 ? year : year - 1);
      setCanGoLeft(newMonthNumber > 0 || year > MIN_YEAR);
    } else {
      if (year !== MIN_YEAR) {
        setCanGoLeft(true);
        setYear(year - 1);
      } else {
        setCanGoLeft(false);
      }
    }
  };

  const goRight = () => {
    setCanGoLeft(true);
    if (!showOnlyYear) {
      if (monthNumber === 11 && year === MAX_YEAR) {
        setCanGoRight(false);
        return;
      }

      const newMonthNumber = monthNumber < 11 ? monthNumber + 1 : 0;

      setMonthNumber(newMonthNumber);
      setYear(monthNumber < 11 ? year : year + 1);
      setCanGoRight(newMonthNumber < 11 || year < MAX_YEAR);
    } else {
      if (year !== MAX_YEAR) {
        setCanGoRight(true);
        setYear(year + 1);
      } else {
        setCanGoRight(false);
      }
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 14,
      }}
    >
      <Pressable
        onPress={goLeft}
        style={{ opacity: canGoLeft ? 100 : 0 }}
        disabled={!canGoLeft}
      >
        <ArrowLeftMainIcon />
      </Pressable>
      <Text style={[Fonts[FontNames.TITLE_2]]}>
        {showOnlyYear
          ? year
          : `${convertNumberToMonthName(monthNumber)} ${year}`}
      </Text>
      <Pressable
        onPress={goRight}
        style={{ opacity: canGoRight ? 100 : 0 }}
        disabled={!canGoRight}
      >
        <ArrowRightMainIcon />
      </Pressable>
    </View>
  );
};

export default HeaderWithMonthOrYear;
