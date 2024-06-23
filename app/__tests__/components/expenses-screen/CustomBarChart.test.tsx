import {render} from '@testing-library/react-native';
import CustomBarChart from "@/app/components/expenses-screen/CustomBarChart";

jest.mock("@/app/utils/Utils", () => ({
    hexToRgb: jest.fn(() => {return {
        r: 0, g: 0, b: 0
    }})
}));
describe('CustomBarChart', () => {
    it('Renders successfully', () => {
        let chart = render(<CustomBarChart labels={["test"]} values={[10]}/>);
        expect(chart).toBeDefined();
    });
})