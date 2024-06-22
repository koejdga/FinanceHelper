import {render} from '@testing-library/react-native';
import OneExpenseRow from "@/app/components/expenses-screen/OneExpenseRow";
import {mockedContext} from "@/app/utils/test-utils";

jest.mock("@/app/utils/Utils", () => ({
    convertNumberToMoney: jest.fn(() => {return "1234"})
}));

jest.mock("@/app/enums_and_contexts/EnumsAndContexts", () => ({
    SettingsContext: mockedContext
}));

describe('OneExpenseRow', () => {
    it('Renders successfully', () => {
        let row = render(<OneExpenseRow amountOfMoney={100} name={"test"} typeOfCard={"test"}/>);
        expect(row).toBeDefined();
    });
})