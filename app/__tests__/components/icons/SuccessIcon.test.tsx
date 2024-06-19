import {render} from '@testing-library/react-native';
import SuccessIcon from "@/app/components/icons/SuccessIcon";

describe('SuccessIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<SuccessIcon/>);
        expect(icon).toBeDefined();
    });
})