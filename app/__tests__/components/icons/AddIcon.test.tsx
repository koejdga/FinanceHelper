import {render} from '@testing-library/react-native';
import AddIcon from "@/app/components/icons/AddIcon";

describe('AddIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<AddIcon/>);
        expect(icon).toBeDefined();
    });
})