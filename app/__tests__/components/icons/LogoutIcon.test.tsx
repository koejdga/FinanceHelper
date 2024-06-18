import {render} from '@testing-library/react-native';
import LogoutIcon from "@/app/components/icons/LogoutIcon";

describe('LogoutIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<LogoutIcon/>);
        expect(icon).toBeDefined();
    });
})