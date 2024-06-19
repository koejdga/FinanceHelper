import {render} from '@testing-library/react-native';
import OneExpenseRow from "@/app/components/expenses-screen/OneExpenseRow";

describe('OneExpenseRow', () => {
    it('Renders successfully', () => {
        let row = render(<OneExpenseRow amountOfMoney={100} name={"test"} typeOfCard={"test"}/>);
        expect(row).toBeDefined();
    });
})