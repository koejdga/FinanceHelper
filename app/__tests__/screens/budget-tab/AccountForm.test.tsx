import {render} from '@testing-library/react-native';
import {mockNavigation} from "@/app/utils/test-utils";
import AccountForm from "@/app/screens/budget-tab/AccountForm";

describe('AccountForm', () => {
    it('Renders successfully', () => {
        let form = render(<AccountForm navigation={mockNavigation.navigation} route={mockNavigation.route}/>);
        expect(form).toBeDefined();
    });
})