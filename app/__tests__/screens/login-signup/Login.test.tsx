import {render, userEvent} from '@testing-library/react-native';
import Login from "@/app/screens/login-signup/Login";

jest.mock('@firebase/auth', () => {
    return {
        signInWithEmailAndPassword: jest.fn(() => {
            return new Promise(() => {})
        })
    }
});
jest.mock('@/firebaseConfig', () => {
    return {
        appAuth: null
    }
});
import {signInWithEmailAndPassword} from '@firebase/auth';
import {UserEventInstance} from "@testing-library/react-native/build/user-event/setup";

describe('Login', () => {
    let user: UserEventInstance;
    beforeAll(() => {
        user = userEvent.setup({ delay: null });
        jest.useFakeTimers();
    })

    it('Renders successfully', () => {
        let form = render(<Login navigation={jest.fn()}/>);
        expect(form).toBeDefined();
    });

    it('Rejects invalid submit', async () => {
        let form = render(<Login navigation={jest.fn()}/>);
        const emailInput = form.getByPlaceholderText("Email");
        const passwordInput = form.getByPlaceholderText("Password");
        const button = form.getByRole("button");
        let email = "someEmail@";
        let password = "password";

        await user.type(emailInput, email);
        await user.type(passwordInput, password);

        await user.press(button);
        jest.runAllTimers();
        expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(0);
    })

    it('Successfully handles valid submit', async () => {
        let form = render(<Login navigation={jest.fn()}/>);
        const emailInput = form.getByPlaceholderText("Email");
        const passwordInput = form.getByPlaceholderText("Password");
        const button = form.getByRole("button");
        let email = "someEmail@gmail.com";
        let password = "password";

        await user.type(emailInput, email);
        await user.type(passwordInput, password);

        await user.press(button);
        jest.runAllTimers();
        expect(signInWithEmailAndPassword).toHaveBeenCalled();
    })
})