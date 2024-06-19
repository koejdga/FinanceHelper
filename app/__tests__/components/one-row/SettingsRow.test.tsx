import {render} from '@testing-library/react-native';
import SettingsRow from "@/app/components/one-row/SettingsRow";

describe('SettingsRow', () => {
    it('Renders successfully', () => {
        let row = render(<SettingsRow onPress={()=>{}} title={"test"}/>);
        expect(row).toBeDefined();
    });
})