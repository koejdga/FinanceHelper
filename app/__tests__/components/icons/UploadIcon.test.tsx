import {render} from '@testing-library/react-native';
import UploadIcon from "@/app/components/icons/UploadIcon";

describe('UploadIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<UploadIcon/>);
        expect(icon).toBeDefined();
    });
})