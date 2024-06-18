import {render} from '@testing-library/react-native';
import TransactionIcon from "@/app/components/icons/TransactionIcon";

describe('TransactionIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<TransactionIcon/>);
        expect(icon).toBeDefined();
    });
})