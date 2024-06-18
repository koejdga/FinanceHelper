import {render} from '@testing-library/react-native';
import {mockNavigation} from "@/app/utils/test-utils";
import AddTransferForm from "@/app/screens/add-transaction/AddTransferForm";

describe('AddTransferForm', () => {
    it('Renders successfully', () => {
        let form = render(<AddTransferForm navigation={mockNavigation.navigation}/>);
        expect(form).toBeDefined();
    });
})