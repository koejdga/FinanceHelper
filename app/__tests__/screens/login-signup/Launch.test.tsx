import {render} from '@testing-library/react-native';
import Launch from "@/app/screens/login-signup/Launch";

describe('Launch', () => {
    it('Renders successfully', () => {
        let screen = render(<Launch/>);
        expect(screen).toBeDefined();
    });
})