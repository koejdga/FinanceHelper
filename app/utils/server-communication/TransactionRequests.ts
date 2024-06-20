import { Transaction } from "../Interfaces";
import axios from "./General";

export const getAllTransactions = async (
  month: number,
  year: number
): Promise<{
  amountIncome: number;
  amountExpense: number;
  total: number;
  transactions: Transaction[];
}> => {
  try {
    const res = await axios.get(
      `users/getAllTransactions/${month + 1}/${year}`
    );

    const result = {
      amountIncome: res.data.amount_income,
      amountExpense: res.data.amount_expense,
      total: res.data.total,
      transactions: res.data.transactions.map((t) => ({
        id: t.transactionId,
        fullDate: t.fullDate,
        date: t.date,
        dayOfWeek: t.dayOfWeek,
        category: t.category,
        amount: t.amount,
        account: t.account,
        type: t.type,
        note: t.note,
      })),
    };

    return result;
  } catch (e) {
    return { amountIncome: 0, amountExpense: 0, total: 0, transactions: [] };
  }
};

export const addExpense = async (
  categoryId: string,
  accountId: string,
  amount: number,
  date: Date,
  note: string | undefined
): Promise<boolean | string> => {
  try {
    await axios.post("expense/createExpense", {
      categoryId: categoryId,
      account: accountId,
      amount: amount,
      date: date.toJSON(),
      note: note,
    });
    return true;
  } catch (e) {
    return e.message;
  }
};

export const addIncome = async (
  categoryId: string,
  accountId: string,
  amount: number,
  date: Date,
  note: string | undefined
): Promise<boolean | string> => {
  try {
    await axios.post("income/createIncome", {
      categoryId: categoryId,
      accountId: accountId,
      amount: amount,
      date: date.toJSON(),
      note: note,
    });
    return true;
  } catch (e) {
    return e.message;
  }
};

export const addTransfer = async (
  amount: number,
  date: Date,
  fromAccountId: string,
  toAccountId: string
): Promise<boolean | string> => {
  try {
    await axios.post("transfer/createTransfer", {
      amount: amount,
      date: date.toJSON(),
      fromAccountId: fromAccountId,
      toAccountId: toAccountId,
    });
    return true;
  } catch (e) {
    return e.message;
  }
};

export const editTransaction = async (
  transactionId: string,
  categoryId: string,
  accountId: string,
  date: Date,
  amount: number,
  note: string,
  type: string
): Promise<boolean | string> => {
  try {
    if (type === "expense")
      await axios.put(`expense/updateExpense/${transactionId}`, {
        categoryId: categoryId,
        date: date.toJSON(),
        note: note,
        amount: amount,
        account: accountId,
      });
    else
      await axios.put(`income/updateIncome/${transactionId}`, {
        categoryId: categoryId,
        date: date.toJSON(),
        note: note,
        amount: amount,
        account: accountId,
      });
    return true;
  } catch (e) {
    return e.message;
  }
};

export const deleteTransaction = async (
  transactionId: string,
  isIncome: boolean
): Promise<boolean | string> => {
  try {
    if (isIncome) await axios.delete(`income/deleteIncome/${transactionId}`);
    else await axios.delete(`expense/deleteExpense/${transactionId}`);
    return true;
  } catch (e) {
    return e.message;
  }
};
