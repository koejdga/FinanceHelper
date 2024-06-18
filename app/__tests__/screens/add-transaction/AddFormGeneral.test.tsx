import {render} from '@testing-library/react-native';
import AddFormGeneral from "@/app/screens/add-transaction/AddFormGeneral";
import {mockNavigation} from "@/app/utils/test-utils";

jest.mock("@/app/utils/ServerCommunication", () => (
    {
        addExpense: jest.fn(),
        getAllAccounts: jest.fn(() => {return []}),
        getAllCategories: jest.fn(() => {return []})
    }
))
describe('AddFormGeneral', () => {
    it('Renders successfully', () => {
        let form = render(<AddFormGeneral navigation={mockNavigation.navigation}/>);
        expect(form).toBeDefined();
    });
})