import CustomButton from "@/app/components/buttons/CustomButton";
import CustomDropdown from "@/app/components/form-components/CustomDropdown";
import FormTextInput from "@/app/components/form-components/FormTextInput";
import RowInAddTransactionForm from "@/app/components/one-row/RowInAddTransactionForm";
import { Account } from "@/app/utils/Interfaces";
import { getAllAccounts } from "@/app/utils/server-communication/AccountRequests";
import { addTransfer } from "@/app/utils/server-communication/TransactionRequests";
import { useEffect, useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DatePicker from "react-native-date-picker";

const AddTransferForm = ({ navigation }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [amount, setAmount] = useState<number>();
  const [fromCard, setFromCard] = useState<Account>();
  const [toCard, setToCard] = useState<Account>();

  const [openDatepicker, setOpenDatepicker] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const init = async () => {
      const accounts = await getAllAccounts();
      setAccounts(accounts);
    };

    init();
  }, []);

  const add = async () => {
    const added = await addTransfer(amount, date, fromCard.id, toCard.id);
    if (added) navigation.navigate("TransactionTabs");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ gap: 24, marginTop: 24, marginHorizontal: 16, flex: 1 }}>
          <RowInAddTransactionForm
            title={"Date"}
            inputField={
              <FormTextInput
                value={date.toLocaleDateString("en-GB")}
                placeholder={"Date"}
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
                onChangeText={(value) => setAmount(parseFloat(value))}
                style={{ marginBottom: 0, marginHorizontal: 0 }}
                editable={true}
              />
            }
          />

          <RowInAddTransactionForm
            title={"From"}
            inputField={
              <CustomDropdown
                variants={accounts
                  .map((a) => ({
                    label: `${a.name} ${a.balance}`,
                    value: a.id,
                  }))
                  .filter((a) => a.value != toCard?.id)}
                value={
                  fromCard
                    ? {
                        label: `${fromCard.name} ${fromCard.balance}`,
                        value: fromCard.id,
                      }
                    : undefined
                }
                onChange={(item) =>
                  setFromCard(accounts.find((a) => a.id === item.value))
                }
              />
            }
          />

          <RowInAddTransactionForm
            title={"To"}
            inputField={
              <CustomDropdown
                variants={accounts
                  .map((a) => ({
                    label: `${a.name} ${a.balance}`,
                    value: a.id,
                  }))
                  .filter((a) => a.value != fromCard?.id)}
                value={
                  toCard
                    ? {
                        label: `${toCard.name} ${toCard.balance}`,
                        value: toCard.id,
                      }
                    : undefined
                }
                onChange={(item) =>
                  setToCard(accounts.find((a) => a.id === item.value))
                }
              />
            }
          />

          <View style={{ flex: 1 }}></View>

          <CustomButton
            title="Save"
            style={{ paddingHorizontal: 0 }}
            onPress={add}
          />

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
    </TouchableWithoutFeedback>
  );
};

export default AddTransferForm;
