import {render} from '@testing-library/react-native';
import OneSummaryRow from "@/app/components/expenses-screen/OneSummaryRow";

describe('OneSummaryRow', () => {
    it('Renders successfully', () => {
        let row = render(<OneSummaryRow periodName={"test"} totalExpense={100} totalIncome={100}/>);
        expect(row).toBeDefined();
    });
})