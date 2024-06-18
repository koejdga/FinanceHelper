import {render} from '@testing-library/react-native';
import CustomButton from "@/app/components/buttons/CustomButton";

describe('CustomButton', () => {
    it('Renders successfully', () => {
        let button = render(<CustomButton title={"test"}/>);
        expect(button).toBeDefined();
    });
})