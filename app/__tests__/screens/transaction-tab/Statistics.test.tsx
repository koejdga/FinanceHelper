import {render} from '@testing-library/react-native';
import React from "react";
import Statistics from "@/app/screens/transaction-tab/Statistics";

jest.mock("@/app/utils/Utils", () => ({
    hexToRgb: jest.fn(() => {return {
        r: 0, g: 0, b: 0
    }})
}));
jest.mock("@/app/utils/server-communication/CategoryRequests", () => ({
    getAllExpenseCategoriesByDate: jest.fn(() => {return Promise.resolve([])})
}));
jest.mock("@/app/utils/server-communication/TransactionRequests", () => ({
    getAllTransactions: jest.fn(() => {return Promise.resolve([])})
}))

describe('Statistics', () => {
    it('Renders successfully', () => {
        let statistics = render(<Statistics/>);
        expect(statistics).toBeDefined();
    });
})