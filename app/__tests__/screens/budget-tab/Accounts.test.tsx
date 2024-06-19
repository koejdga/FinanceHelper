import {render} from '@testing-library/react-native';
import {mockNavigation} from "@/app/utils/test-utils";
import Accounts from "@/app/screens/budget-tab/Accounts";
import React from "react";

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

jest.mock("@/app/utils/server-communication/AccountRequests")
describe('Accounts', () => {
    it('Renders successfully', () => {
        let accounts = render(<Accounts navigation={mockNavigation.navigation}/>);
        expect(accounts).toBeDefined();
    });
})