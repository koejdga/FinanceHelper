import axios from "./General";
import { MonthSummary } from "../Interfaces";

export const createUser = async (uid: string) => {
  try {
    await axios.post("users/createUser", { firebaseId: uid });
    return true;
  } catch (error) {
    return false;
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
