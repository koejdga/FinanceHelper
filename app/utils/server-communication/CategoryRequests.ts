import axios from "./General";
import { AxiosError } from "axios";
import { Category } from "../Interfaces";

export const getAllExpenseCategoriesByDate = async (
  month: number,
  year: number
): Promise<{
  categoriesWithLimits: Category[];
  categoriesWithoutLimits: Category[];
  categoriesWithNoExpenses: Category[];
}> => {
  try {
    const res = await axios.get(
      `expenseCategory/AllCategories/${month}/${year}`
    );

    const categoriesWithLimits = res.data.categoriesWithLimits.map(
      (c: {
        categoryId: string;
        categoryName: string;
        currentExpense: number;
        limit: number;
        percentageSpent: number;
      }) => ({
        id: c.categoryId,
        categoryName: c.categoryName,
        currentExpense: c.currentExpense,
        limit: c.limit,
        percentageSpent: c.percentageSpent,
      })
    );

    const categoriesWithoutLimits = res.data.categoriesWithoutLimits.map(
      (c: {
        categoryId: string;
        categoryName: string;
        currentExpense: number;
      }) => ({
        id: c.categoryId,
        categoryName: c.categoryName,
        currentExpense: c.currentExpense,
      })
    );

    const categoriesWithNoExpenses = res.data.categoriesWithNoExpenses.map(
      (c: { categoryId: string; categoryName: string }) => ({
        id: c.categoryId,
        categoryName: c.categoryName,
      })
    );

    return {
      categoriesWithLimits,
      categoriesWithoutLimits,
      categoriesWithNoExpenses,
    };
  } catch (e) {
    return {
      categoriesWithLimits: [],
      categoriesWithoutLimits: [],
      categoriesWithNoExpenses: [],
    };
  }
};

export const getAllExpenseCategories = async (): Promise<Category[]> => {
  try {
    const res = await axios.get("expenseCategory/AllCategories");
    return res.data.data.map((c: { _id: string; name: string }) => ({
      id: c._id,
      categoryName: c.name,
    }));
  } catch (e) {
    return [];
  }
};

export const getAllIncomeCategories = async (): Promise<Category[]> => {
  try {
    const res = await axios.get("incomeCategory/AllCategories");
    return res.data.data.map((c: { _id: string; name: string }) => ({
      id: c._id,
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
    return false;
  }
};

export const editIncomeCategory = async (
  categoryId: string,
  name: string
): Promise<boolean> => {
  try {
    await axios.put(`incomeCategory/update/${categoryId}`, {
      name: name,
    });
    return true;
  } catch (e) {
    const err = e as AxiosError;
    console.log(err.request);
    return false;
  }
};

export const editExpenseCategory = async (
  categoryId: string,
  name: string,
  limit: number
): Promise<boolean> => {
  try {
    await axios.put(`expenseCategory/updateExpenseCategory/${categoryId}`, {
      name: name,
      limit: limit,
    });
    return true;
  } catch (e) {
    const err = e as AxiosError;
    console.log(err.request);
    return false;
  }
};

export const deleteCategory = async (categoryId: string): Promise<boolean> => {
  try {
    await axios.delete(`users/deleteCategory/${categoryId}`);
    return true;
  } catch (e) {
    return false;
  }
};
