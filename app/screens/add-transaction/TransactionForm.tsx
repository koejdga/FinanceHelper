import CustomButton from "@/app/components/buttons/CustomButton";
import CustomDropdown from "@/app/components/form-components/CustomDropdown";
import FormTextInput from "@/app/components/form-components/FormTextInput";
import RowInAddTransactionForm from "@/app/components/one-row/RowInAddTransactionForm";
import { Account, Category, Transaction } from "@/app/utils/Interfaces";
import { getAllAccounts } from "@/app/utils/server-communication/AccountRequests";
import {
  getAllExpenseCategories,
  getAllIncomeCategories,
} from "@/app/utils/server-communication/CategoryRequests";
import {
  addExpense,
  addIncome,
  editTransaction,
} from "@/app/utils/server-communication/TransactionRequests";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DatePicker from "react-native-date-picker";

const TransactionForm = ({ route, navigation }) => {
  const isIncome = route.params?.isIncome as boolean;
  const [transaction, _] = useState(route.params?.transaction as Transaction);

  const [month, __] = useState(route.params?.month as number);
  const [year, ___] = useState(route.params?.year as number);
  const [editting, setEditting] = useState(false);
  const isFocused = useIsFocused();
  const [categories, setCategories] = useState<Category[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);

  const [date, setDate] = useState<Date>(new Date());
  const [amount, setAmount] = useState<number | "">(transaction?.amount);
  const [category, setCategory] = useState<Category>(categories[0]);
  const [account, setAccount] = useState<Account>(accounts[0]);
  const [note, setNote] = useState<string>(transaction?.note);

  const [openDatepicker, setOpenDatepicker] = useState(false);

  useEffect(() => {
    setEditting(transaction !== undefined);
    if (transaction !== undefined) {
      setDate(new Date(transaction.fullDate));
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      let categories: Category[];
      if (isIncome) {
        categories = await getAllIncomeCategories();
      } else {
        categories = await getAllExpenseCategories();
      }

      const accounts = await getAllAccounts();

      setCategories(categories);
      setAccounts(accounts);

      if (transaction !== undefined) {
        setCategory(
          categories.find((c) => c.categoryName === transaction?.category)
        );
        setAccount(accounts.find((a) => a.name === transaction?.account));
      }
    };

    init();
  }, [isFocused]);

  const add = async () => {
    let added: string | boolean;
    if (!isIncome)
      added = await addExpense(
        category?.id,
        account?.id,
        amount !== "" ? amount : 0,
        date,
        note
      );
    else
      added = await addIncome(
        category?.id,
        account?.id,
        amount !== "" ? amount : 0,
        date,
        note
      );
    if (added === true) {
      navigation.navigate("TransactionTabs");
    } else {
      const errorMessage = added as string;
      Alert.alert("Error", errorMessage, [{ text: "OK" }]);
    }
  };

  const edit = async () => {
    const edited = await editTransaction(
      transaction.id,
      category?.id,
      account?.id,
      date,
      amount !== "" ? amount : 0,
      note,
      transaction.type
    );

    if (edited === true)
      navigation.navigate("FullScreenTransaction", {
        transaction: {
          id: transaction.id,
          fullDate: date.toJSON(),
          category: category.categoryName,
          amount: amount !== "" ? amount : 0,
          account: account.name,
          type: transaction.type,
          note: note,
        },
        month,
        year,
      });
    else {
      const errorMessage = edited as string;
      Alert.alert("Error", errorMessage, [{ text: "OK" }]);
    }
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
                value={amount?.toString()}
                keyboardType="decimal-pad"
                placeholder={"Write an amount..."}
                onChangeText={(value) => {
                  if (!isNaN(parseFloat(value))) {
                    setAmount(parseFloat(value));
                  } else {
                    setAmount("");
                  }
                }}
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
                  value: c.id,
                }))}
                onChange={(item) =>
                  setCategory(categories.find((c) => c.id === item.value))
                }
                value={
                  category
                    ? {
                        label: category.categoryName,
                        value: category.id,
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
                  account
                    ? { label: account.name, value: account.id }
                    : undefined
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
            onPress={editting ? edit : add}
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

export default TransactionForm;
