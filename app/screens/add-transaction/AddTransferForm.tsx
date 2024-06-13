import CustomButton from "@/app/components/buttons/CustomButton";
import ChooseTransaction from "@/app/components/choose-one-option-buttons/ChooseTransaction";
import CustomDropdown from "@/app/components/form-components/CustomDropdown";
import FormTextInput from "@/app/components/form-components/FormTextInput";
import RowInAddTransactionForm from "@/app/components/one-row/RowInAddTransactionForm";
import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import DatePicker from "react-native-date-picker";

const AddTransferForm = ({ navigation }) => {
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
          title={"Amount"}
          inputField={
            <FormTextInput
              keyboardType="decimal-pad"
              placeholder={"Write an amount..."}
              onChangeText={(value) => setName(value)}
              style={{ marginBottom: 0, marginHorizontal: 0 }}
              editable={true}
            />
          }
        />

        <RowInAddTransactionForm
          title={"From"}
          inputField={<CustomDropdown variants={accounts} />}
        />

        <RowInAddTransactionForm
          title={"To"}
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

export default AddTransferForm;
