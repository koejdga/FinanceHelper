import { Accent } from "@/app/constants/Colors";
import { hexToRgb } from "@/app/utils/Utils";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

type Props = {
  labels: string[];
  values: number[];
  legend?: string;
};

const CustomLineGraph: React.FC<Props> = ({ labels, values, legend }) => {
  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(26, 0, 146, ${opacity})`,
  };

  const accentRgb = hexToRgb(Accent[100]);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        color: (opacity = 1) =>
          `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, ${opacity})`,
        strokeWidth: 4,
      },
    ],
    legend: legend ? [legend] : undefined,
  };

  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
    />
  );
};

export default CustomLineGraph;
