import {render} from '@testing-library/react-native';
import React from "react";
import Transaction from "@/app/screens/transaction-tab/Transaction";

jest.mock("@/app/utils/server-communication/CategoryRequests", () => ({
    getAllExpenseCategoriesByDate: jest.fn(() => {return Promise.resolve({
        categoriesWithLimits: [],
        categoriesWithoutLimits: [],
        categoriesWithNoExpenses: []
    })}),
    getAllIncomeCategories: jest.fn(() => {return Promise.resolve([])})
}))

jest.mock('@/firebaseConfig', () => {
    return {
        appAuth: null
    }
});

jest.mock("@/app/utils/Utils", () => ({
    convertNumberToMoney: jest.fn(() => {return "123"})
}));

jest.mock("@/app/utils/SaveLocally", () => ({
    loadData: jest.fn(() => {return Promise.resolve(null)})
}));

describe('Transaction', () => {
    it('Renders successfully', () => {
        let transaction = render(<Transaction/>);
        expect(transaction).toBeDefined();
    });
})