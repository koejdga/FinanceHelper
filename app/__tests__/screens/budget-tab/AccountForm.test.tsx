import {render, userEvent} from '@testing-library/react-native';
import {mockNavigation} from "@/app/utils/test-utils";
import AccountForm from "@/app/screens/budget-tab/AccountForm";
import {addAccount, editAccount} from "@/app/utils/server-communication/AccountRequests";

jest.mock("@/app/utils/server-communication/AccountRequests", () => ({
    addAccount: jest.fn(() => {return Promise.resolve(true)}),
    editAccount: jest.fn(() => {return Promise.resolve(true)})
}))
jest.useFakeTimers()
describe('AccountForm', () => {
    it('Renders successfully', () => {
        let form = render(<AccountForm navigation={mockNavigation.navigation} route={mockNavigation.route}/>);
        expect(form).toBeDefined();
    });

    it('Handles "add" successfully', async () => {
        let form = render(<AccountForm navigation={mockNavigation.navigation} route={mockNavigation.route}/>);

        let name = form.getAllByRole("text")[0]
        let balance = form.getAllByRole("text")[1]
        const submit = form.getByRole("button");

        await userEvent.press(submit);
        jest.runAllTimers()
        expect(addAccount).toHaveBeenCalled();
        expect(mockNavigation.navigation.navigate).toHaveBeenLastCalledWith("Accounts");
    });

    it('Handles "edit" successfully', async () => {
        let route = mockNavigation.route;
        route.params.accountId = "id";
        let navigation = mockNavigation.navigation;
        navigation.goBack = jest.fn();
        let form = render(<AccountForm navigation={navigation} route={route}/>);

        let name = form.getAllByRole("text")[0]
        let balance = form.getAllByRole("text")[1]
        const submit = form.getByRole("button");

        await userEvent.press(submit);
        jest.runAllTimers()
        expect(editAccount).toHaveBeenCalled();
        expect(navigation.goBack).toHaveBeenCalled();
    });
})