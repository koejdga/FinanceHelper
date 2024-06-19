import {render} from '@testing-library/react-native';
import DailyExpensesHistory from "@/app/components/expenses-screen/DailyExpensesHistory";

describe('DailyExpensesHistory', () => {
    it('Renders successfully', () => {
        let history = render(<DailyExpensesHistory transactions={[
            {
                date: 12,
                dayOfWeek: 3,
                category: "test",
                amount: 15,
                account: "test",
                type: "test"
            }
        ]}/>);
        expect(history).toBeDefined();
    });
})