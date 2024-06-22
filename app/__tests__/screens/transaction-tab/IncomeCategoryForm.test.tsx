import {render} from '@testing-library/react-native';
import React from "react";
import {mockNavigation} from "@/app/utils/test-utils";
import IncomeCategoryForm from "@/app/screens/transaction-tab/IncomeCategoryForm";

jest.mock("@/firebaseConfig", () => ({
    appAuth: null
}));
describe('IncomeCategoryForm', () => {
    it('Renders successfully', () => {
        let form = render(<IncomeCategoryForm {...mockNavigation}/>);
        expect(form).toBeDefined();
    });
})