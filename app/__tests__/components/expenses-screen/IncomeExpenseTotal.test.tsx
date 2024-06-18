import {render} from '@testing-library/react-native';
import IncomeExpenseTotal from "@/app/components/expenses-screen/IncomeExpenseTotal";

describe('IncomeExpenseTotal', () => {
    it('Renders successfully', () => {
        let total = render(<IncomeExpenseTotal expense={5} income={5}/>);
        expect(total).toBeDefined();
    });
})