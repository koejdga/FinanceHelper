import {render} from '@testing-library/react-native';
import {mockNavigation} from "@/app/utils/test-utils";
import AddTransactionForm from "@/app/screens/add-transaction/TransactionForm";

jest.mock("@/app/utils/ServerCommunication", () => (
    {
        addExpense: jest.fn(),
        getAllAccounts: jest.fn(() => {return []}),
        getAllCategories: jest.fn(() => {return []})
    }
))
jest.mock("@react-navigation/native", () => (
    {
        useIsFocused: jest.fn(() => {return true}),
        useTheme: jest.fn(() => {return true})
    }
))
describe('AddTransactionForm', () => {
    it('Renders successfully', () => {
        let form = render(<AddTransactionForm route={mockNavigation.route} navigation={mockNavigation.navigation}/>);
        expect(form).toBeDefined();
    });
})