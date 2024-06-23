import {render} from '@testing-library/react-native';
import CustomLineGraph from "@/app/components/expenses-screen/CustomLineGraph";

jest.mock("@/app/utils/Utils", () => ({
    hexToRgb: jest.fn(() => {return {
        r: 0, g:0, b:0
    }})
}));
describe('CustomLineGraph', () => {
    it('Renders successfully', () => {
        let graph = render(<CustomLineGraph labels={["test"]} values={[10]}/>);
        expect(graph).toBeDefined();
    });
})