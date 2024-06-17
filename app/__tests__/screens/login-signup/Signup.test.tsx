import {render, userEvent} from '@testing-library/react-native';
import Signup from "@/app/screens/login-signup/Signup";
jest.mock('@firebase/auth', () => {
    return {
        createUserWithEmailAndPassword: jest.fn(() => {
            return new Promise(() => {return {userCredential: {user: ""}}})
        }),
        updateProfile: jest.fn()
    }
});
jest.mock('@/firebaseConfig', () => {
    return {
        appAuth: null
    }
});
import {createUserWithEmailAndPassword} from '@firebase/auth';
import {UserEventInstance} from "@testing-library/react-native/build/user-event/setup";

describe('Signup', () => {
    let user: UserEventInstance;
    beforeAll(() => {
        user = userEvent.setup({ delay: null });
        jest.useFakeTimers();
    })

    it('Renders successfully', () => {
        let form = render(<Signup navigation={jest.fn()}/>);
        expect(form).toBeDefined();
    });

    it('Rejects invalid submit', async () => {
        let form = render(<Signup navigation={jest.fn()}/>);
        const nameInput = form.getByPlaceholderText("Name");
        const emailInput = form.getByPlaceholderText("Email");
        const passwordInput = form.getByPlaceholderText("Password");
        const button = form.getByRole("button");
        let name = "";
        let email = "someEmail@gmail.com";
        let password = "password";
        await user.type(nameInput, name);
        await user.type(emailInput, email);
        await user.type(passwordInput, password);

        await user.press(button);
        expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(0);
    })

    it('Successfully handles valid submit', async () => {
        let form = render(<Signup navigation={jest.fn()}/>);
        const nameInput = form.getByPlaceholderText("Name");
        const emailInput = form.getByPlaceholderText("Email");
        const passwordInput = form.getByPlaceholderText("Password");
        const button = form.getByRole("button");
        let name = "Name";
        let email = "someEmail@gmail.com";
        let password = "password";
        await user.type(nameInput, name);
        await user.type(emailInput, email);
        await user.type(passwordInput, password);

        await user.press(button);
        expect(createUserWithEmailAndPassword).toHaveBeenCalled();
        expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(null, email, password);
    })
})