import {render, userEvent} from '@testing-library/react-native';
import Login from "@/app/screens/login-signup/Login";
import {signInWithEmailAndPassword} from '@firebase/auth';
import {UserEventInstance} from "@testing-library/react-native/build/user-event/setup";
import {Alert} from "react-native";

jest.mock('@firebase/auth', () => {
    return {
        signInWithEmailAndPassword: jest.fn(() => {
            return Promise.resolve()
        })
    }
});
jest.mock('@/firebaseConfig', () => {
    return {
        appAuth: null
    }
});
jest.spyOn(Alert, "alert");

describe('Login', () => {
    let user: UserEventInstance;
    beforeAll(() => {
        user = userEvent.setup({ delay: null });
        jest.useFakeTimers();
    })

    it('Renders successfully', () => {
        let screen = render(<Login navigation={jest.fn()}/>);
        expect(screen).toBeDefined();
    });

    it('Rejects invalid submit', async () => {
        let screen = render(<Login navigation={jest.fn()}/>);
        const emailInput = screen.getByPlaceholderText("Email");
        const passwordInput = screen.getByPlaceholderText("Password");
        const button = screen.getByRole("button");
        let email = "someEmail@";
        let password = "password";

        await user.type(emailInput, email);
        await user.type(passwordInput, password);

        await user.press(button);
        jest.runAllTimers();
        expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(0);
        expect(Alert.alert).toHaveBeenCalled();
    })

    it('Successfully handles valid submit', async () => {
        let screen = render(<Login navigation={jest.fn()}/>);
        const emailInput = screen.getByPlaceholderText("Email");
        const passwordInput = screen.getByPlaceholderText("Password");
        const button = screen.getByRole("button");
        let email = "someEmail@gmail.com";
        let password = "password";

        await user.type(emailInput, email);
        await user.type(passwordInput, password);

        await user.press(button);
        jest.runAllTimers();
        expect(signInWithEmailAndPassword).toHaveBeenCalled();
    })
})