import CustomButton from "@/app/components/buttons/CustomButton";
import ChooseTransaction from "@/app/components/choose-one-option-buttons/ChooseTransaction";
import CustomDropdown from "@/app/components/form-components/CustomDropdown";
import FormTextInput from "@/app/components/form-components/FormTextInput";
import RowInAddTransactionForm from "@/app/components/one-row/RowInAddTransactionForm";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { Category } from "../transaction-tab/Limits";
import {
  addExpense,
  getAllAccounts,
  getAllExpenseCategories,
} from "@/app/utils/ServerCommunication";
import { Account } from "../budget-tab/Accounts";

const AddTransactionForm = ({ route, navigation }) => {
  const isIncome = route.params?.isIncome as boolean;
  const isFocused = useIsFocused();
  const [categories, setCategories] = useState<Category[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);

  const [date, setDate] = useState<Date>(new Date());
  const [amount, setAmount] = useState<number>();
  const [category, setCategory] = useState<Category>(categories[0]);
  const [account, setAccount] = useState<Account>(accounts[0]);
  const [note, setNote] = useState<string | undefined>();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props: any) => <ChooseTransaction {...props} />,
    });
  }, []);

  useEffect(() => {
    const init = async () => {
      const categories = await getAllExpenseCategories(isIncome);
      const sortedCategories = categories.sort((a: Category, b: Category) => {
        if (a.limit === undefined && b.limit !== undefined) {
          return 1;
        } else if (a.limit !== undefined && b.limit === undefined) {
          return -1;
        } else {
          return 0;
        }
      });

      setCategories(sortedCategories);
      const accounts = await getAllAccounts();
      setAccounts(accounts);
    };
    init();
  }, [isFocused]);

  const add = async () => {
    if (!category) {
      console.log("no category, sorry");
    } else if (!account) {
      console.log("no account, sorry");
    } else {
      if (!isIncome)
        await addExpense(category.categoryId, account.id, amount, date, note);
      navigation.navigate("TransactionTabs");
    }
  };

  const [openDatepicker, setOpenDatepicker] = useState(false);

  return (
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
          title={"Category"}
          inputField={
            <CustomDropdown
              variants={categories.map((c) => ({
                label: c.categoryName,
                value: c.categoryId,
              }))}
              onChange={(item) =>
                setCategory(categories.find((c) => c.categoryId === item.value))
              }
              value={
                category
                  ? {
                      label: category.categoryName,
                      value: category.categoryId,
                    }
                  : undefined
              }
            />
          }
        />

        <RowInAddTransactionForm
          title={"Account"}
          inputField={
            <CustomDropdown
              variants={accounts.map((a) => ({ label: a.name, value: a.id }))}
              onChange={(item) =>
                setAccount(accounts.find((a) => a.id === item.value))
              }
              value={
                account ? { label: account.name, value: account.id } : undefined
              }
            />
          }
        />

        <RowInAddTransactionForm
          title={"Note"}
          inputField={
            <FormTextInput
              placeholder={"Write a decription..."}
              onChangeText={(value) => setNote(value)}
              style={{ marginBottom: 0, marginHorizontal: 0 }}
              editable={true}
              value={note}
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
  );
};

export default AddTransactionForm;
