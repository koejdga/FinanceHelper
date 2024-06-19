import {render} from '@testing-library/react-native';
import ChooseOneOptionButtons from "@/app/components/choose-one-option-buttons/ChooseOneOptionButtons";

describe('ChooseOneOptionButtons', () => {
    it('Renders successfully', () => {
        let buttons = render(<ChooseOneOptionButtons enumeration={[]} selected={""} setSelected={() => {}}/>);
        expect(buttons).toBeDefined();
    });
})