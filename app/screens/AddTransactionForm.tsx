import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import DatePicker from "react-native-date-picker";
import ChooseTransaction from "../components/ChooseTransaction";
import CustomDropdown from "../components/CustomDropdown";
import RowInAddTransactionForm from "../components/RowInAddTransactionForm";
import FormTextInput from "../components/form-components/FormTextInput";
import CustomButton from "../components/CustomButton";

const AddTransactionForm = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props: any) => <ChooseTransaction {...props} />,
    });
  }, []);

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [name, setName] = useState("");

  const [openDatepicker, setOpenDatepicker] = useState(false);

  const categories = [
    { label: "Food", value: "1" },
    { label: "Household", value: "2" },
    { label: "Hobby", value: "3" },
  ];

  const accounts = [
    { label: "Card 1", value: "1" },
    { label: "Card 2", value: "2" },
    { label: "Cash", value: "3" },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <View style={{ gap: 24, marginTop: 24, marginHorizontal: 16, flex: 1 }}>
        <RowInAddTransactionForm
          title={"Date"}
          inputField={
            <FormTextInput
              value={date.toLocaleDateString("en-GB")}
              placeholder={"Date"}
              onChangeText={(value) => setName(value)}
              onPress={() => setOpenDatepicker(true)}
              style={{ marginBottom: 0, marginHorizontal: 0 }}
              editable={false}
            />
          }
        />

        <RowInAddTransactionForm
          title={"Name"}
          inputField={
            <FormTextInput
              placeholder={"Write a short name..."}
              onChangeText={(value) => setName(value)}
              style={{ marginBottom: 0, marginHorizontal: 0 }}
              editable={true}
            />
          }
        />

        <RowInAddTransactionForm
          title={"Category"}
          inputField={<CustomDropdown variants={categories} />}
        />

        <RowInAddTransactionForm
          title={"Account"}
          inputField={<CustomDropdown variants={accounts} />}
        />

        <RowInAddTransactionForm
          title={"Note"}
          inputField={
            <FormTextInput
              placeholder={"Write a decription..."}
              onChangeText={(value) => setName(value)}
              style={{ marginBottom: 0, marginHorizontal: 0 }}
              editable={true}
            />
          }
        />
        <View style={{ flex: 1 }}></View>

        <CustomButton title="Save" style={{ paddingHorizontal: 0 }} />

        <DatePicker
          modal
          open={openDatepicker}
          date={date}
          mode="date"
          onConfirm={(date) => {
            setOpenDatepicker(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpenDatepicker(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddTransactionForm;
