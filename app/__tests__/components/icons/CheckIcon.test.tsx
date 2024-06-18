import {render} from '@testing-library/react-native';
import CheckIcon from "@/app/components/icons/CheckIcon";

describe('CheckIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<CheckIcon/>);
        expect(icon).toBeDefined();
    });
})