import {render} from '@testing-library/react-native';
import CustomDropdown from "@/app/components/form-components/CustomDropdown";

describe('CustomDropdown', () => {
    it('Renders successfully', () => {
        let dropdown = render(<CustomDropdown value={{ label: "Card 1", value: "1" }}
                                          variants={[{ label: "Card 1", value: "1" }]}/>);
        expect(dropdown).toBeDefined();
    });
})