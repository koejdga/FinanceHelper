import { View, Text, Dimensions } from "react-native";
import React from "react";
import { BarChart } from "react-native-chart-kit";
import { hexToRgb } from "@/app/utils/Utils";
import { Accent } from "@/app/constants/Colors";

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
      <Text style={{ textAlign: "center" }}>{legend}</Text>
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
