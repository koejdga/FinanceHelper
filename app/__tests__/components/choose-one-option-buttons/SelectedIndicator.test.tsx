import {render} from '@testing-library/react-native';
import SelectedIndicator from "@/app/components/choose-one-option-buttons/SelectedIndicator";

describe('SelectedIndicator', () => {
    it('Renders successfully', () => {
        let selectedIndicator = render(<SelectedIndicator dictOfPositions={{"":""}} selected={""}/>);
        expect(selectedIndicator).toBeDefined();
    });
})