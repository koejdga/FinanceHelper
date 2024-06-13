import { ScrollView } from "react-native";
import CustomBarChart from "../components/expenses_screen/CustomBarChart";
import CustomLineGraph from "../components/expenses_screen/CustomLineGraph";

const Statistics = () => {
  return (
    <ScrollView>
      <CustomLineGraph
        labels={["January", "February", "March", "April", "May", "June"]}
        values={[20, 45, 28, 80, 99, 43]}
        legend="Expenses"
      />
      <CustomBarChart
        labels={["January", "February", "March", "April", "May", "June"]}
        values={[20, 45, 28, 80, 99, 43]}
        legend="Category Limits"
      />
    </ScrollView>
  );
};

export default Statistics;
