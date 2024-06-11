import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { FontNames, Fonts } from "../constants/Fonts";
import HomeIndicator from "./HomeIndicator";

export enum Options {
  DAILY,
  MONTHLY,
  LIMITS,
}

type Props = {
  selected: Options;
  setSelected: (option: Options) => void;
};

const DailyMonthlyLimitsButtons: React.FC<Props> = ({
  selected,
  setSelected,
}) => {
  const [dictOfPositions, setDictOfPositions] = useState({});

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          gap: 35,
          paddingTop: 15,
          paddingHorizontal: 20,
        }}
      >
        <Pressable
          onPress={() => setSelected(Options.DAILY)}
          onLayout={(event) => {
            const { x, width } = event.nativeEvent.layout;
            setDictOfPositions({
              ...dictOfPositions,
              [Options.DAILY]: { x, width },
            });
          }}
        >
          <Text style={[Fonts[FontNames.BODY_2]]}>Daily</Text>
        </Pressable>
        <Pressable
          onPress={() => setSelected(Options.MONTHLY)}
          onLayout={(event) => {
            const { x, width } = event.nativeEvent.layout;
            setDictOfPositions({
              ...dictOfPositions,
              [Options.MONTHLY]: { x, width },
            });
          }}
        >
          <Text style={[Fonts[FontNames.BODY_2]]}>Monthly</Text>
        </Pressable>
        <Pressable
          onPress={() => setSelected(Options.LIMITS)}
          onLayout={(event) => {
            const { x, width } = event.nativeEvent.layout;
            setDictOfPositions({
              ...dictOfPositions,
              [Options.LIMITS]: { x, width },
            });
          }}
        >
          <Text style={[Fonts[FontNames.BODY_2]]}>Limits</Text>
        </Pressable>
      </View>
      <HomeIndicator dictOfPositions={dictOfPositions} selected={selected} />
    </>
  );
};

export default DailyMonthlyLimitsButtons;
