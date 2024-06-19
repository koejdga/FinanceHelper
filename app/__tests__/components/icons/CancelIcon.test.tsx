import {render} from '@testing-library/react-native';
import CancelIcon from "@/app/components/icons/CancelIcon";

describe('CancelIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<CancelIcon/>);
        expect(icon).toBeDefined();
    });
})