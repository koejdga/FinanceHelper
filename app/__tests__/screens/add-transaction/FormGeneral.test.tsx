import {render} from '@testing-library/react-native';
import {mockNavigation} from "@/app/utils/test-utils";
import AddFormGeneral from "@/app/screens/add-transaction/FormGeneral";

jest.mock("react-native-date-picker");
jest.mock("@/app/utils/server-communication/AccountRequests", () => ({
    getAllAccounts: jest.fn(() => {return Promise.resolve([])})
}));

jest.mock("@/app/utils/server-communication/TransactionRequests", () => ({
    addTransfer: jest.fn(() => {return Promise.resolve(true)})
}));

jest.mock("@/app/utils/server-communication/CategoryRequests", () => ({
    getAllExpenseCategories: jest.fn(() => {return Promise.resolve([])}),
    getAllIncomeCategories: jest.fn(() => {return Promise.resolve([])})
}));
describe('AddFormGeneral', () => {
    it('Renders successfully', () => {
        let form = render(<AddFormGeneral {...mockNavigation}/>);
        expect(form).toBeDefined();
    });
})