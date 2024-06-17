import {render} from '@testing-library/react-native';
import EmailVerification from "@/app/screens/login-signup/EmailVerification";

jest.mock('@/firebaseConfig', () =>
    ({ appAuth: {
        currentUser: {
            emailVerified: true,
            reload: () => {
                return new Promise(() => {})
            }
        }
        }}));
jest.mock('@firebase/auth', () =>
    ({
        sendEmailVerification: () => {
            return new Promise(() => {});
        }
    }));
describe('EmailVerification', () => {
    it('Renders successfully', () => {
        let form = render(<EmailVerification navigation={jest.fn()}/>);
        expect(form).toBeDefined();
    });
})