import {render} from '@testing-library/react-native';
import DailyExpensesHistory from "@/app/components/expenses-screen/DailyExpensesHistory";
import {mockedContext, mockNavigation} from "@/app/utils/test-utils";

jest.mock("@/app/utils/Utils", () => ({
    convertNumberToWeekDay: jest.fn(() => {return "Sunday"})
}));

jest.mock( "@/app/enums_and_contexts/EnumsAndContexts", () => ({
    SettingsContext: mockedContext
}));


describe('DailyExpensesHistory', () => {
    it('Renders successfully', () => {
        let history = render(<DailyExpensesHistory transactions={[
            {
                id: "123",
                fullDate: new Date(),
                category: "test",
                amount: 15,
                account: "test",
                type: "test",
                note: ""
            }
        ]} month={4} navigation={mockNavigation.navigation} year={3}/>);
        expect(history).toBeDefined();
    });
})