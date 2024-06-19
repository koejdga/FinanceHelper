import {render} from '@testing-library/react-native';
import MonthlyExpensesHistory from "@/app/components/expenses-screen/MonthlyExpensesHistory";
jest.mock("@/app/utils/server-communication/CategoryRequests")

describe('MonthlyExpensesHistory', () => {
    it('Renders successfully', () => {
        let history = render(<MonthlyExpensesHistory year={2000}/>);
        expect(history).toBeDefined();
    });
})