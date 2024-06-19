import {render} from '@testing-library/react-native';
import SettingsIcon from "@/app/components/icons/SettingsIcon";

describe('SettingsIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<SettingsIcon/>);
        expect(icon).toBeDefined();
    });
})