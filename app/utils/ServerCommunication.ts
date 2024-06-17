import { appAuth } from "@/firebaseConfig";
import axios, { AxiosError } from "axios";
import { Account } from "../screens/budget-tab/Accounts";

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
    console.log(err.message);
    return Promise.reject(error);
  }
);

export const getAllCategories = async () => {
  try {
    const res = await axios.get(`expenseCategory/AllCategories/${6}/${2024}`);
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

export const addCategory = async (name: string, limit: number | undefined) => {
  try {
    await axios.post("expenseCategory/createExpenseCategory", {
      name: name,
      limit: limit,
    });
  } catch (e) {}
};

export const getAllAccounts = async (): Promise<Account[]> => {
  try {
    const res = await axios.get("accounts/balances");
    if (res.data.status && res.data.status === "success") {
      return res.data.data.map(
        (account: { name: string; balance: number }) => ({
          name: account.name,
          balance: account.balance,
        })
      );
    } else {
      console.log("res status in getAllAccounts is not success");
      console.log("res status = " + res.data.status);
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
