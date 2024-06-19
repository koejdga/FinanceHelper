import {render} from '@testing-library/react-native';
import React from "react";
import BudgetStack from "@/app/screens/budget-tab/BudgetStack";

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

describe('BudgetStack', () => {
    it('Renders successfully', () => {
        let budget = render(<BudgetStack/>);
        expect(budget).toBeDefined();
    });
})