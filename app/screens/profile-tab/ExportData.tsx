import CustomButton from "@/app/components/buttons/CustomButton";
import OneQuestionDropdown from "@/app/components/one-row/OneQuestionDropdown";
import { SafeAreaView, View } from "react-native";

const dataType = [
  { label: "All", value: "1" },
  { label: "Only income", value: "2" },
  { label: "Only expenses", value: "3" },
];

const dateRange = [
  { label: "Last month", value: "1" },
  { label: "Last 3 months", value: "2" },
  { label: "All", value: "3" },
];

const dataFormat = [
  { label: "CSV", value: "1" },
  { label: "XLSX", value: "2" },
  { label: "PDF", value: "3" },
];

const ExportData = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 40, gap: 24 }}>
        <OneQuestionDropdown
          question="What data do your want to export?"
          variants={dataType}
        />
        <OneQuestionDropdown question="What date range?" variants={dateRange} />
        <OneQuestionDropdown
          question="What format do you want to export?"
          variants={dataFormat}
        />
      </View>
      <View style={{ flex: 1 }}></View>
      <CustomButton
        title="Export"
        onPress={() => {
          navigation.navigate("CheckEmailExportData");
        }}
      />
    </SafeAreaView>
  );
};

export default ExportData;
