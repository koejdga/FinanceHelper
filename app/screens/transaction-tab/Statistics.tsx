import CustomBarChart from "@/app/components/expenses-screen/CustomBarChart";
import CustomLineGraph from "@/app/components/expenses-screen/CustomLineGraph";
import { ScrollView } from "react-native";

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
