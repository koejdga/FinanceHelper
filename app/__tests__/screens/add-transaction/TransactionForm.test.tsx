import {render} from '@testing-library/react-native';
import {mockNavigation} from "@/app/utils/test-utils";
import AddTransactionForm from "@/app/screens/add-transaction/TransactionForm";

jest.mock("react-native-date-picker")
jest.mock("@react-navigation/native", () => (
    {
        useIsFocused: jest.fn(() => {return true}),
        useTheme: jest.fn(() => {return true})
    }
))

jest.mock("@/app/utils/server-communication/CategoryRequests", () => ({
    getAllExpenseCategoriesByDate: jest.fn(() => {return Promise.resolve({
        categoriesWithLimits: [],
        categoriesWithoutLimits: [],
        categoriesWithNoExpenses: []
    })}),
    getAllIncomeCategories: jest.fn(() => {return Promise.resolve([])})
}))
jest.mock("@/app/utils/server-communication/AccountRequests", () => ({
    getAllAccounts: jest.fn(() => {return Promise.resolve([])})
}));

jest.mock("@/app/utils/server-communication/TransactionRequests", () => ({
    addExpense: jest.fn(() => {return Promise.resolve(true)}),
    addIncome: jest.fn(() => {return Promise.resolve(true)}),
    editTransaction:  jest.fn(() => {return Promise.resolve(true)})
}));

describe('AddTransactionForm', () => {
    it('Renders successfully', () => {
        let form = render(<AddTransactionForm route={mockNavigation.route} navigation={mockNavigation.navigation}/>);
        expect(form).toBeDefined();
    });
})