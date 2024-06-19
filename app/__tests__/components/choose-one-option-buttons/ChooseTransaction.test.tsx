import {render} from '@testing-library/react-native';
import ChooseTransaction from "@/app/components/choose-one-option-buttons/ChooseTransaction";

describe('ChooseTransaction', () => {
    it('Renders successfully', () => {
        let chooseTransaction = render(<ChooseTransaction selected={""} setSelected={() => {}}/>);
        expect(chooseTransaction).toBeDefined();
    });
})