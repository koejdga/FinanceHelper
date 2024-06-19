import {render} from '@testing-library/react-native';
import ChooseOneOptionButton from "@/app/components/choose-one-option-buttons/ChooseOneOptionButton";

describe('ChooseOneOptionButton', () => {
    it('Renders successfully', () => {
        let button = render(<ChooseOneOptionButton
            dictOfPositions={{}}
            option={""}
            setDictOfPositions={() => {}}
            setSelected={()=>{}}/>);
        expect(button).toBeDefined();
    });
})