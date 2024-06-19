import {render} from '@testing-library/react-native';
import AddTransactionButton from "@/app/components/buttons/AddTransactionButton";

describe('AddTransactionButton', () => {
    it('Renders successfully', () => {
        let button = render(<AddTransactionButton/>);
        expect(button).toBeDefined();
    });
})