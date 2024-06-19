import {render, userEvent} from '@testing-library/react-native';
import {mockNavigation} from "@/app/utils/test-utils";
import AddTransferForm from "@/app/screens/add-transaction/AddTransferForm";
import {addTransfer} from "@/app/utils/server-communication/TransactionRequests";

jest.mock("react-native-date-picker")
jest.mock( "@/app/utils/server-communication/AccountRequests", () => ({
    getAllAccounts: jest.fn(() => {return Promise.resolve([{
        id: "1",
        name: "test",
        balance: 1
    },
        {
            id: "2",
            name: "test",
            balance: 2
        }])})
}))
jest.mock("@/app/utils/server-communication/TransactionRequests", () => ({
    addTransfer: jest.fn(() => {return Promise.resolve(true)})
}))

describe('AddTransferForm', () => {
    it('Renders successfully', () => {
        let form = render(<AddTransferForm navigation={mockNavigation.navigation}/>);
        expect(form).toBeDefined();
    });
})