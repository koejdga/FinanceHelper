import {render, userEvent} from '@testing-library/react-native';
import Signup from "@/app/screens/login-signup/Signup";
jest.mock('@firebase/auth', () => ( {
        createUserWithEmailAndPassword: jest.fn(() => {
            return Promise.resolve({userCredential: {user: ""}})
        }),
        updateProfile: jest.fn()
    }
));
jest.mock('@/firebaseConfig', () => ({
        appAuth: null
}));
import {createUserWithEmailAndPassword} from '@firebase/auth';
import {UserEventInstance} from "@testing-library/react-native/build/user-event/setup";

describe('Signup', () => {
    let user: UserEventInstance;
    beforeAll(() => {
        user = userEvent.setup({ delay: null });
        jest.useFakeTimers();
    })

    it('Renders successfully', () => {
        let screen = render(<Signup navigation={jest.fn()}/>);
        expect(screen).toBeDefined();
    });

    it('Rejects invalid submit', async () => {
        let screen = render(<Signup navigation={jest.fn()}/>);
        const nameInput = screen.getByPlaceholderText("Name");
        const emailInput = screen.getByPlaceholderText("Email");
        const passwordInput = screen.getByPlaceholderText("Password");
        const button = screen.getByRole("button");
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
        let screen = render(<Signup navigation={jest.fn()}/>);
        const nameInput = screen.getByPlaceholderText("Name");
        const emailInput = screen.getByPlaceholderText("Email");
        const passwordInput = screen.getByPlaceholderText("Password");
        const button = screen.getByRole("button");
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