import {render} from '@testing-library/react-native';
import React from "react";
import TransactionTabs from "@/app/screens/transaction-tab/TransactionTabs";
import {mockedContext, mockNavigation} from "@/app/utils/test-utils";

jest.mock("@/app/utils/server-communication/CategoryRequests", () => ({
    getAllExpenseCategoriesByDate: jest.fn(() => {return Promise.resolve({
        categoriesWithLimits: [],
        categoriesWithoutLimits: [],
        categoriesWithNoExpenses: []
    })}),
    getAllIncomeCategories: jest.fn(() => {return Promise.resolve([])})
}))
jest.mock("@/app/utils/server-communication/TransactionRequests", () => ({
    getAllTransactions: jest.fn(() => {
        return Promise.resolve({
            transactions: [],
            amountIncome: 1,
            amountExpense: 1,
            total: 0
        })
    })
}))
jest.mock("@react-navigation/native", () => (
    {
        ...jest.requireActual("@react-navigation/native"),
        useIsFocused: jest.fn(() => {return true}),
        useTheme: jest.fn( () => {
                return  { ...jest.requireActual("@react-navigation/native").useTheme(),
                    dark: true}
            }
        )
    }
))

jest.mock('@/firebaseConfig', () => {
    return {
        appAuth: null
    }
});

jest.mock("@/app/utils/Utils", () => ({
    convertNumberToWeekDay: jest.fn(() => {return "Sunday"}),
    convertNumberToMonthName: jest.fn(() => {return "June"})
}))

jest.mock("@/app/utils/SaveLocally", () => ({
    loadData: jest.fn(() => {return Promise.resolve(null)}),
    removeValue: jest.fn(() => {return Promise.resolve(true)})
}));
jest.mock( "@/app/enums_and_contexts/EnumsAndContexts", () => ({
    SettingsContext: mockedContext
}));

describe('TransactionTabs', () => {
    it('Renders successfully', () => {
        let transactionTabs = render(<TransactionTabs navigation={mockNavigation.navigation}/>);
        expect(transactionTabs).toBeDefined();
    });
})