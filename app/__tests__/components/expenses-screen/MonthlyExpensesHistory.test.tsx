import {render} from '@testing-library/react-native';
import MonthlyExpensesHistory from "@/app/components/expenses-screen/MonthlyExpensesHistory";
import {mockedContext} from "@/app/utils/test-utils";
jest.mock("@/app/utils/server-communication/CategoryRequests")

jest.mock("@/app/utils/server-communication/UserRequests", () => ({
    getAllMonthSummaries: jest.fn(() => {return Promise.resolve([])})
}));
jest.mock("@/app/utils/Utils", () => ({
    convertNumberToMonthName: jest.fn(() => {return "June"})
}))
jest.mock( "@/app/enums_and_contexts/EnumsAndContexts", () => ({
    SettingsContext: mockedContext
}));


describe('MonthlyExpensesHistory', () => {
    it('Renders successfully', () => {
        let history = render(<MonthlyExpensesHistory year={2000}/>);
        expect(history).toBeDefined();
    });
})