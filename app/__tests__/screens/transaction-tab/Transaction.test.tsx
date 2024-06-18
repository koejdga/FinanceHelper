import {render} from '@testing-library/react-native';
import React from "react";
import Transaction from "@/app/screens/transaction-tab/Transaction";

jest.mock("@/app/utils/ServerCommunication", () => ({
    getAllCategories: jest.fn(() => {return []}),
    getAllTransactions: jest.fn(() => {return []})
}))
jest.mock('@/firebaseConfig', () => {
    return {
        appAuth: null
    }
});


describe('Transaction', () => {
    it('Renders successfully', () => {
        let transaction = render(<Transaction/>);
        expect(transaction).toBeDefined();
    });
})