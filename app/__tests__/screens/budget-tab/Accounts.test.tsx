import {render} from '@testing-library/react-native';
import {mockedContext, mockNavigation} from "@/app/utils/test-utils";
import Accounts from "@/app/screens/budget-tab/Accounts";
import {createContext} from "react";

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
jest.mock("@/app/utils/Utils", () => ({
    convertNumberToMoney: jest.fn(() => {return "123"})
}))

jest.mock("@/app/utils/server-communication/AccountRequests", () => ({
    deleteAccount: jest.fn(() => {return Promise.resolve(true)}),
    getAllAccounts: jest.fn(() => {return Promise.resolve([])}),
}))


jest.mock( "@/app/enums_and_contexts/EnumsAndContexts", () => ({
    SettingsContext: mockedContext
}));

describe('Accounts', () => {
    it('Renders successfully', () => {
        let accounts = render(<Accounts navigation={mockNavigation.navigation}/>);
        expect(accounts).toBeDefined();
    });
})