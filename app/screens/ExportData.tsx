import { SafeAreaView, View } from "react-native";
import CustomButton from "../components/CustomButton";
import OneQuestionExportData from "../components/OneQuestionExportData";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  //   { label: "Item 4", value: "4" },
  //   { label: "Item 5", value: "5" },
  //   { label: "Item 6", value: "6" },
  //   { label: "Item 7", value: "7" },
  //   { label: "Item 8", value: "8" },
];

const ExportData = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <View style={{ marginTop: 40, gap: 24 }}>
        <OneQuestionExportData
          question="What data do your want to export?"
          variants={data}
        />
        <OneQuestionExportData question="What date range?" variants={data} />
        <OneQuestionExportData
          question="What format do you want to export?"
          variants={data}
        />
      </View>
      <View style={{ flex: 1 }}></View>
      <CustomButton title="Export" />
    </SafeAreaView>
  );
};

export default ExportData;
