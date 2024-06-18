import {render} from '@testing-library/react-native';
import React from "react";
import TransactionTabs from "@/app/screens/transaction-tab/TransactionTabs";
import {mockNavigation} from "@/app/utils/test-utils";

jest.mock("@/app/utils/ServerCommunication", () => (
    {
        deleteCategory: jest.fn(),
        getAllMonthSummaries: jest.fn(() => {return []}),
        getAllCategories: jest.fn(() => {return []}),
        getAllTransactions: jest.fn(() => {return []})
    }
))
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

describe('TransactionTabs', () => {
    it('Renders successfully', () => {
        let transactionTabs = render(<TransactionTabs navigation={mockNavigation.navigation}/>);
        expect(transactionTabs).toBeDefined();
    });
})