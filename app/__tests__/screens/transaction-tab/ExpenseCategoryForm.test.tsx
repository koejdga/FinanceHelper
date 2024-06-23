import {render} from '@testing-library/react-native';
import React from "react";
import {mockNavigation} from "@/app/utils/test-utils";
import ExpenseCategoryForm from "@/app/screens/transaction-tab/ExpenseCategoryForm";

jest.mock("@/app/utils/server-communication/CategoryRequests", () => ({
    addExpenseCategory: jest.fn(() => {return Promise.resolve(true)}),
    editExpenseCategory: jest.fn(() => {return Promise.resolve(true)}),
}));
describe('ExpenseCategoryForm', () => {
    it('Renders successfully', () => {
        let form = render(<ExpenseCategoryForm {...mockNavigation}/>);
        expect(form).toBeDefined();
    });
})