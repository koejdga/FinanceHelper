import {render} from '@testing-library/react-native';
import EditIcon from "@/app/components/icons/EditIcon";

describe('EditIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<EditIcon/>);
        expect(icon).toBeDefined();
    });
})