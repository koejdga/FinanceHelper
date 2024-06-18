import {render} from '@testing-library/react-native';
import React from "react";
import {mockNavigation} from "@/app/utils/test-utils";
import AddCategoryForm from "@/app/screens/transaction-tab/CategoryForm";

jest.mock("@/app/utils/ServerCommunication", () => (
    {
        addCategory: jest.fn(),
    }
))

describe('AddCategoryForm', () => {
    it('Renders successfully', () => {
        let form = render(<AddCategoryForm {...mockNavigation}/>);
        expect(form).toBeDefined();
    });
})