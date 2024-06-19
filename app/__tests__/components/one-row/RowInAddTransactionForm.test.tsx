import {render} from '@testing-library/react-native';
import RowInAddTransactionForm from "@/app/components/one-row/RowInAddTransactionForm";

describe('RowInAddTransactionForm', () => {
    it('Renders successfully', () => {
        let row = render(<RowInAddTransactionForm inputField={null} title={"test"}/>);
        expect(row).toBeDefined();
    });
})