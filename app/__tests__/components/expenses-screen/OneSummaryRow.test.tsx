import {render} from '@testing-library/react-native';
import OneSummaryRow from "@/app/components/expenses-screen/OneSummaryRow";
import {mockedContext} from "@/app/utils/test-utils";

jest.mock("@/app/utils/Utils", () => ({
    convertNumberToMoney: jest.fn(() => {return "1234"})
}));

jest.mock( "@/app/enums_and_contexts/EnumsAndContexts", () => ({
    SettingsContext: mockedContext
}));

describe('OneSummaryRow', () => {
    it('Renders successfully', () => {
        let row = render(<OneSummaryRow periodName={"test"} totalExpense={100} totalIncome={100}/>);
        expect(row).toBeDefined();
    });
})