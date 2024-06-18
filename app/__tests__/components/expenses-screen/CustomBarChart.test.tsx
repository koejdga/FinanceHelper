import {render} from '@testing-library/react-native';
import CustomBarChart from "@/app/components/expenses-screen/CustomBarChart";

describe('CustomBarChart', () => {
    it('Renders successfully', () => {
        let chart = render(<CustomBarChart labels={["test"]} values={[10]}/>);
        expect(chart).toBeDefined();
    });
})