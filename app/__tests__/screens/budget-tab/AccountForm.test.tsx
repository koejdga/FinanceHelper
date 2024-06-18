import {render} from '@testing-library/react-native';
import {mockNavigation} from "@/app/utils/test-utils";
import AccountForm from "@/app/screens/budget-tab/AccountForm";

jest.mock("@/app/utils/ServerCommunication", () => (
    {
        addAccount: jest.fn()
    }
))
describe('AccountForm', () => {
    it('Renders successfully', () => {
        let form = render(<AccountForm navigation={mockNavigation.navigation} route={mockNavigation.route}/>);
        expect(form).toBeDefined();
    });
})