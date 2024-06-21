import { Account } from "../Interfaces";
import axios from "./General";

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
    } else return [];
  } catch (e) {
    return [];
  }
};

export const addAccount = async (
  name: string,
  balance: number
): Promise<boolean | string> => {
  try {
    const res = await axios.post("accounts/createAccount", {
      name: name,
      balance: balance,
    });
    return res.data.status === "success";
  } catch (e) {
    return e.message;
  }
};

export const editAccount = async (
  accountId: string,
  name: string,
  balance: number
): Promise<boolean | string> => {
  try {
    await axios.put(`accounts/updateAccount/${accountId}`, {
      name: name,
      balance: balance,
    });
    return true;
  } catch (e) {
    return e.message;
  }
};

export const deleteAccount = async (
  accountId: string
): Promise<boolean | string> => {
  try {
    await axios.delete(`accounts/deleteAccount/${accountId}`);
    return true;
  } catch (e) {
    return e.message;
  }
};
