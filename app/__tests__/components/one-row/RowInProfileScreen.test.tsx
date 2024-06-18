import {render} from '@testing-library/react-native';
import RowInProfileScreen from "@/app/components/one-row/RowInProfileScreen";
import SettingsIcon from "@/app/components/icons/SettingsIcon";

describe('RowInProfileScreen', () => {
    it('Renders successfully', () => {
        let row = render(<RowInProfileScreen Icon={SettingsIcon} text={"test"}/>);
        expect(row).toBeDefined();
    });
})