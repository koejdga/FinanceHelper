import CustomButton from "@/app/components/buttons/CustomButton";
import OneQuestionDropdown from "@/app/components/one-row/OneQuestionDropdown";
import { shareReport } from "@/app/utils/InteractionsWithFiles";
import { ReportFormats } from "@/app/utils/Interfaces";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";

enum DataType {
  ALL = "All",
  // ONLY_INCOME = "Only income",
  // ONLY_EXPENSES = "Only expense",
}

enum DateRange {
  LAST_MONTH = "Last month",
  // LAST_3_MONTHS = "Last 3 months",
  // ALL = "All",
}

const dataTypes = Object.values(DataType).map((dt) => ({
  label: dt,
  value: dt,
}));
const dateRanges = Object.values(DateRange).map((dt) => ({
  label: dt,
  value: dt,
}));
const dataFormats = Object.values(ReportFormats).map((dt) => ({
  label: dt,
  value: dt,
}));

const ExportData = ({ navigation }) => {
  const [dataType, setDataType] = useState(dataTypes[0]);
  const [dateRange, setDateRange] = useState(dateRanges[0]);
  const [dataFormat, setDataFormat] = useState(dataFormats[0]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 40, gap: 24 }}>
        <OneQuestionDropdown
          question="What data do your want to export?"
          variants={dataTypes}
          value={dataType}
          setValue={(value) =>
            setDataType({
              value: value.value as DataType,
              label: value.label as DataType,
            })
          }
        />
        <OneQuestionDropdown
          question="What date range?"
          variants={dateRanges}
          value={dateRange}
          setValue={(value) =>
            setDateRange({
              value: value.value as DateRange,
              label: value.label as DateRange,
            })
          }
        />
        <OneQuestionDropdown
          question="What format do you want to export?"
          variants={dataFormats}
          value={dataFormat}
          setValue={(value) =>
            setDataFormat({
              value: value.value as ReportFormats,
              label: value.label as ReportFormats,
            })
          }
        />
      </View>
      <View style={{ flex: 1 }}></View>
      <CustomButton
        title="Export"
        onPress={async () => {
          await shareReport(
            dataFormat.label as ReportFormats,
            new Date().getMonth(),
            new Date().getFullYear()
          );
        }}
      />
    </SafeAreaView>
  );
};

export default ExportData;
