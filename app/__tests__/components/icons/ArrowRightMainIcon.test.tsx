import {render} from '@testing-library/react-native';
import ArrowRightMainIcon from "@/app/components/icons/ArrowRightMainIcon";

describe('ArrowRightMainIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<ArrowRightMainIcon/>);
        expect(icon).toBeDefined();
    });
})