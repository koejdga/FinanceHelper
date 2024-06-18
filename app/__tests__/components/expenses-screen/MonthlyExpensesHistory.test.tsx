import {render} from '@testing-library/react-native';
import MonthlyExpensesHistory, {MonthSummary} from "@/app/components/expenses-screen/MonthlyExpensesHistory";

jest.mock('@/app/utils/ServerCommunication', () => {
    return {
        getAllMonthSummaries: jest.fn(() => {
                return new Promise(() => {
                    let monthSummaries: MonthSummary[] = [];
                    for (let i = 0; i < 12; i++) monthSummaries.push({
                        expenseTotal: 1,
                        incomeTotal: 1,
                        month: i
                    })
                    return {
                        yearInfo: {
                            expenseTotal: 12,
                            incomeTotal: 12,
                            total: 0
                        },
                        monthSummaries: monthSummaries
                    }
                })
            }
        )
    }
})

describe('MonthlyExpensesHistory', () => {
    it('Renders successfully', () => {
        let history = render(<MonthlyExpensesHistory year={2000}/>);
        expect(history).toBeDefined();
    });
})