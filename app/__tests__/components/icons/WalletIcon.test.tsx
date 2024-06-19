import {render} from '@testing-library/react-native';
import WalletIcon from "@/app/components/icons/WalletIcon";

describe('WalletIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<WalletIcon/>);
        expect(icon).toBeDefined();
    });
})