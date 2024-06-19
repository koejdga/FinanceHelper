import {render} from '@testing-library/react-native';
import React from "react";
import Statistics from "@/app/screens/transaction-tab/Statistics";
describe('Statistics', () => {
    it('Renders successfully', () => {
        let statistics = render(<Statistics/>);
        expect(statistics).toBeDefined();
    });
})