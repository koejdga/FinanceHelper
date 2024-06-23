import {render} from '@testing-library/react-native';
import IncomeExpenseTotal from "@/app/components/expenses-screen/IncomeExpenseTotal";
import {mockedContext} from "@/app/utils/test-utils";

jest.mock("@/app/utils/Utils", () => ({
    convertNumberToMoney: jest.fn(() => {return "1234"})
}));
jest.mock( "@/app/enums_and_contexts/EnumsAndContexts", () => ({
    SettingsContext: mockedContext
}));

describe('IncomeExpenseTotal', () => {
    it('Renders successfully', () => {
        let total = render(<IncomeExpenseTotal expense={5} income={5} total={5}/>);
        expect(total).toBeDefined();
    });
})