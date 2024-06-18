import {render} from '@testing-library/react-native';
import ProfileIcon from "@/app/components/icons/ProfileIcon";

describe('ProfileIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<ProfileIcon/>);
        expect(icon).toBeDefined();
    });
})