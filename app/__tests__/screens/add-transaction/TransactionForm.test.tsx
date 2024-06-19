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
describe('AddTransactionForm', () => {
    it('Renders successfully', () => {
        let form = render(<AddTransactionForm route={mockNavigation.route} navigation={mockNavigation.navigation}/>);
        expect(form).toBeDefined();
    });
})