import {render} from '@testing-library/react-native';
import HeaderWithMonthOrYear from "@/app/components/expenses-screen/HeaderWithMonthOrYear";

jest.mock("@/app/utils/Utils", () => ({
    convertNumberToMonthName: jest.fn(() => {return "June"})
}));
describe('HeaderWithMonthOrYear', () => {
    it('Renders successfully', () => {
        let header = render(<HeaderWithMonthOrYear setYear={() => {}} showOnlyYear year={2000}/>);
        expect(header).toBeDefined();
    });
})