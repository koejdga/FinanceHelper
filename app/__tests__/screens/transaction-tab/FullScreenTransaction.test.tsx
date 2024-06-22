import {render} from '@testing-library/react-native';

import FullScreenTransaction from "@/app/screens/transaction-tab/FullScreenTransaction";
import {mockedContext, mockNavigation} from "@/app/utils/test-utils";

jest.mock("@/app/utils/Utils", () => ({
    convertNumberToMoney: jest.fn(() => {return "123"})
}));
jest.mock("@/app/utils/server-communication/TransactionRequests", () => ({
    deleteTransaction: jest.fn(() => {return Promise.resolve(true)})
}));

jest.mock( "@/app/enums_and_contexts/EnumsAndContexts", () => ({
    SettingsContext: mockedContext
}));


describe('FullScreenTransaction', () => {
    it('Renders successfully', () => {
        let transaction = render(<FullScreenTransaction {...mockNavigation}/>);
        expect(transaction).toBeDefined();
    });
})