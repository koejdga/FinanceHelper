import {render} from '@testing-library/react-native';
import ArrowLeftMainIcon from "@/app/components/icons/ArrowLeftMainIcon";

describe('ArrowLeftMainIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<ArrowLeftMainIcon/>);
        expect(icon).toBeDefined();
    });
})