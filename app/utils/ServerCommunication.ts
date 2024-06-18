import { appAuth } from "@/firebaseConfig";
import axios, { AxiosError } from "axios";
import { Account } from "../screens/budget-tab/Accounts";
import { MonthSummary } from "../components/expenses-screen/MonthlyExpensesHistory";

axios.defaults.baseURL = "https://serverfinancehelper.onrender.com/api/";

axios.interceptors.request.use(async function (config) {
  const token = await appAuth.currentUser.getIdToken();
  // console.log(token);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const err = error as AxiosError;
    console.log("Response error:", err);
    const url = err.request.responseURL as string;
    const path = url.replace(axios.defaults.baseURL, "");
    console.log("ERROR: error at path", path);
    return Promise.reject(error);
  }
);

export const getAllExpenseCategories = async (month: number, year: number) => {
  try {
    const res = await axios.get(
      `expenseCategory/AllCategories/${month}/${year}`
    );
    return res.data.map(
      (c: {
        categoryId: string;
        categoryName: string;
        currentExpense: number;
        limit: number;
        percentageSpent: number;
      }) => ({
        categoryId: c.categoryId,
        categoryName: c.categoryName,
        currentExpense: c.currentExpense,
        limit: c.limit,
        percentageSpent: c.percentageSpent,
      })
    );
  } catch (e) {
    return [];
  }
};

export const getAllIncomeCategories = async () => {
  try {
    const res = await axios.get("incomeCategory/AllCategories");
    return res.data.data.map((c: { _id: string; name: string }) => ({
      categoryId: c._id,
      categoryName: c.name,
    }));
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const addExpenseCategory = async (
  name: string,
  limit: number | undefined
) => {
  try {
    await axios.post("expenseCategory/createExpenseCategory", {
      name: name,
      limit: limit,
    });
  } catch (e) {}
};

export const addIncomeCategory = async (name: string): Promise<boolean> => {
  try {
    await axios.post("incomeCategory/createIncomeCategory", {
      name: name,
    });
    return true;
  } catch (e) {
    const err = e as AxiosError;
    const obj = JSON.parse(err.request._response);
    console.log("Error response message:", obj.message);
    return false;
  }
};

export const getAllAccounts = async (): Promise<Account[]> => {
  try {
    const res = await axios.get("accounts/balances");
    if (res.data.status && res.data.status === "success") {
      return res.data.data.map(
        (account: { _id: string; name: string; balance: number }) => ({
          id: account._id,
          name: account.name,
          balance: account.balance,
        })
      );
    }
  } catch (e) {
    return [];
  }
};

export const addAccount = async (
  name: string,
  balance: number
): Promise<boolean> => {
  try {
    const res = await axios.post("accounts/createAccount", {
      name: name,
      balance: balance,
    });
    return res.data.status === "success";
  } catch (e) {}
};

export const addExpense = async (
  categoryId: string,
  accountId: string,
  amount: number,
  date: Date,
  note: string | undefined
) => {
  try {
    await axios.post("expense/createExpense", {
      categoryId: categoryId,
      account: accountId,
      amount: amount,
      date: date.toJSON(),
      note: note,
    });
  } catch (e) {
    const err = e as AxiosError;
    const obj = JSON.parse(err.request._response);
    console.log("Error response message:", obj.message);
  }
};

export interface Transaction {
  date: number;
  dayOfWeek: number;
  category: string;
  amount: number;
  account: string;
  type: string;
}

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
        date: t.date,
        dayOfWeek: t.dayOfWeek,
        category: t.category,
        amount: t.amount,
        account: t.account,
        type: t.type,
      })),
    };

    return result;
  } catch (e) {
    const err = e as AxiosError;
    console.log("err request:", err);
    return { amountIncome: 0, amountExpense: 0, total: 0, transactions: [] };
  }
};

export const getAllMonthSummaries = async (
  year: number
): Promise<{
  yearInfo: {
    expenseTotal: number;
    incomeTotal: number;
    total: number;
  };
  monthSummaries: MonthSummary[];
}> => {
  try {
    const res = await axios.get(`users/getAllMonthSummaries/${year}`);
    return {
      yearInfo: {
        expenseTotal: res.data.yearInfo.yearExpenseTotal,
        incomeTotal: res.data.yearInfo.yearIncomeTotal,
        total: res.data.yearInfo.yearTotal,
      },
      monthSummaries: res.data.arrayOfMonth.map(
        (m: { expenseTotal: number; incomeTotal: number; month: number }) => ({
          expenseTotal: m.expenseTotal,
          incomeTotal: m.incomeTotal,
          month: m.month,
        })
      ),
    };
  } catch (error) {}
};

export const deleteCategory = async (categoryId: string): Promise<boolean> => {
  try {
    await axios.delete(`users/deleteCategory/${categoryId}`);
    return true;
  } catch (e) {
    const err = e as AxiosError;
    const obj = JSON.parse(err.request._response);
    console.log("Error response message:", obj.message);
    return false;
  }
};

export const deleteAccount = async (accountId: string): Promise<boolean> => {
  try {
    await axios.delete(`accounts/deleteAccount/${accountId}`);
    return true;
  } catch (e) {
    const err = e as AxiosError;
    const obj = JSON.parse(err.request._response);
    console.log("Error response message:", obj.message);
    return false;
  }
};
