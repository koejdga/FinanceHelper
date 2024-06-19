import {render} from '@testing-library/react-native';
import React from "react";
import {mockNavigation} from "@/app/utils/test-utils";
import ExpenseCategoryForm from "@/app/screens/transaction-tab/ExpenseCategoryForm";

describe('ExpenseCategoryForm', () => {
    it('Renders successfully', () => {
        let form = render(<ExpenseCategoryForm {...mockNavigation}/>);
        expect(form).toBeDefined();
    });
})