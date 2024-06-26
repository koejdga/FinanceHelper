import { Accent } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { hexToRgb } from "@/app/utils/Utils";
import React from "react";
import { Dimensions, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

type Props = {
  labels: string[];
  values: number[];
  legend?: string;
};

const CustomBarChart: React.FC<Props> = ({ labels, values, legend }) => {
  const accentRgb = hexToRgb(Accent[100]);

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) =>
      `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
      },
    ],
  };

  return (
    <>
      <Text
        style={[
          Fonts[FontNames.BODY_4],
          { textAlign: "center", marginTop: 5, color: Accent[100] },
        ]}
      >
        {legend}
      </Text>
      <BarChart
        style={{ paddingHorizontal: 16 }}
        data={data}
        width={screenWidth - 32}
        height={300}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        yAxisSuffix=""
      />
    </>
  );
};

export default CustomBarChart;
