import {render} from '@testing-library/react-native';
import CustomLineGraph from "@/app/components/expenses-screen/CustomLineGraph";

describe('CustomLineGraph', () => {
    it('Renders successfully', () => {
        let graph = render(<CustomLineGraph labels={["test"]} values={[10]}/>);
        expect(graph).toBeDefined();
    });
})