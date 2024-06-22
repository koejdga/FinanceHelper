import {render} from '@testing-library/react-native';
import React, {createContext} from "react";
import { mockNavigation} from "@/app/utils/test-utils";
import Limits from "@/app/screens/transaction-tab/Limits";
import {getAllExpenseCategoriesByDate, getAllIncomeCategories} from "@/app/utils/server-communication/CategoryRequests";


jest.mock('@/firebaseConfig', () => {
    return {
        appAuth: null
    }
});

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

jest.mock("@/app/utils/server-communication/CategoryRequests", () => ({
    getAllIncomeCategories: jest.fn(),
    getAllExpenseCategoriesByDate: jest.fn(() => {
        return Promise.resolve({
            categoriesWithLimits: [],
            categoriesWithoutLimits: [],
            categoriesWithNoExpenses: []
        })
    })
}));

jest.mock("@/app/utils/Utils", () => ({
    convertNumberToMoney: jest.fn(() => {return "123"})
}));

jest.mock("@/app/utils/SaveLocally", () => ({
    loadData: jest.fn(() => {return Promise.resolve(null)})
}));

function mockContext() {
    return createContext("USD");
}
jest.mock( "@/app/enums_and_contexts/EnumsAndContexts", () => ({
    SettingsContext: mockContext()
}));

describe('Limits', () => {
    it('Renders successfully', () => {
        let limits = render(<Limits month={2000} year={2000} {...mockNavigation}/>);
        expect(limits).toBeDefined();
    });
})