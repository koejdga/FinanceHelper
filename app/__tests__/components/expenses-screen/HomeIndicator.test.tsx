import {render} from '@testing-library/react-native';
import HomeIndicator from "@/app/components/expenses-screen/HomeIndicator";

describe('HomeIndicator', () => {
    it('Renders successfully', () => {
        let indicator = render(<HomeIndicator dictOfPositions={[{"":""}]} selected={""}/>);
        expect(indicator).toBeDefined();
    });
})