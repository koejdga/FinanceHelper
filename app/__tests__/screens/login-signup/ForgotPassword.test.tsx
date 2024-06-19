import {render, userEvent} from "@testing-library/react-native";
import ForgotPassword from "@/app/screens/login-signup/ForgotPassword";

jest.mock('@firebase/auth', () => ({
        sendPasswordResetEmail: jest.fn(() => {return Promise.resolve()})
}));
jest.mock('@/firebaseConfig', () => ({
        appAuth: null
}));
import {sendPasswordResetEmail} from '@firebase/auth';
import {UserEventInstance} from "@testing-library/react-native/build/user-event/setup";

describe('ForgotPassword', () => {
    let user: UserEventInstance;
    beforeAll(() => {
        user = userEvent.setup({ delay: null });
        jest.useFakeTimers();
    })

    it('Renders successfully', () => {
        let screen = render(<ForgotPassword navigation={jest.fn()}/>);
        expect(screen).toBeDefined();
    });

    it('Knows when and where to send email', async () => {
        let screen = render(<ForgotPassword navigation={jest.fn()}/>);
        const input = screen.getByPlaceholderText("Email");
        const button = screen.getByRole("button");
        let email = "someEmail@gmail.com";
        await user.type(input, email);
        await user.press(button);
        expect(sendPasswordResetEmail).toHaveBeenCalled();
        expect(sendPasswordResetEmail).toHaveBeenCalledWith(null, email);
    });
})