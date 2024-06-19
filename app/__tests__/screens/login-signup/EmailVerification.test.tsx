import {render} from '@testing-library/react-native';
import EmailVerification from "@/app/screens/login-signup/EmailVerification";

jest.mock('@/firebaseConfig', () =>
    ({ appAuth: {
        currentUser: {
            emailVerified: true,
            reload: () => {
                return Promise.resolve()
            }
        }
        }}));
jest.mock('@firebase/auth', () =>
    ({
        sendEmailVerification: jest.fn(() => {
            return Promise.resolve()
        })
    }));
jest.mock("@/app/utils/server-communication/UserRequests")
describe('EmailVerification', () => {
    it('Renders successfully', () => {
        let screen = render(<EmailVerification navigation={jest.fn()}/>);
        expect(screen).toBeDefined();
    });
})