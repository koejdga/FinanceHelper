import {render} from '@testing-library/react-native';
import React from "react";
import FullScreenTransaction from "@/app/screens/transaction-tab/FullScreenTransaction";
import {mockNavigation} from "@/app/utils/test-utils";

describe('FullScreenTransaction', () => {
    it('Renders successfully', () => {
        let transaction = render(<FullScreenTransaction {...mockNavigation}/>);
        expect(transaction).toBeDefined();
    });
})