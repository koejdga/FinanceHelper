import {render} from '@testing-library/react-native';
import DeleteIcon from "@/app/components/icons/DeleteIcon";

describe('DeleteIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<DeleteIcon/>);
        expect(icon).toBeDefined();
    });
})