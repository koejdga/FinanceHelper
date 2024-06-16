import {render, userEvent} from "@testing-library/react-native";
import ForgotPassword from "@/app/screens/login-signup/ForgotPassword";

jest.mock('@firebase/auth', () => {
    return {
        sendPasswordResetEmail: jest.fn(() => {return new Promise(() => {})})
    }
});
jest.mock('@/firebaseConfig', () => {
    return {
        appAuth: null
    }
});
import {sendPasswordResetEmail} from '@firebase/auth';

describe('ForgotPassword', () => {
    it('Renders successfully', () => {
        let form = render(<ForgotPassword navigation={jest.fn()}/>);
        expect(form).toBeDefined();
    });

    it('Knows when and where to send email', async () => {
        let form = render(<ForgotPassword navigation={jest.fn()}/>);
        const input = form.getByPlaceholderText("Email");
        const button = form.getByRole("button");
        let email = "someEmail@gmail.com";
        await userEvent.type(input, email);
        await userEvent.press(button);
        expect(sendPasswordResetEmail).toHaveBeenCalled();
        expect(sendPasswordResetEmail).toHaveBeenCalledWith(null, email);
    });
})