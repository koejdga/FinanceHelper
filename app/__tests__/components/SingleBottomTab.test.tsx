import {render} from '@testing-library/react-native';
import SingleBottomTab, {TabNames} from "@/app/components/SingleBottomTab";

describe('SingleBottomTab', () => {
    it('Renders successfully', () => {
        let bottomTab = render(<SingleBottomTab tabName={TabNames.TRANSACTION}/>);
        expect(bottomTab).toBeDefined();
    });
})