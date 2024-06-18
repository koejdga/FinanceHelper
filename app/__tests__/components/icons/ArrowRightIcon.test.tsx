import {render} from '@testing-library/react-native';
import ArrowRightIcon from "@/app/components/icons/ArrowRightIcon";

describe('ArrowRightIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<ArrowRightIcon/>);
        expect(icon).toBeDefined();
    });
})