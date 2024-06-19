import {render, userEvent} from '@testing-library/react-native';
import OnboardingScreen from "@/app/screens/login-signup/OnboardingScreen";
import React from "react";
import {UserEventInstance} from "@testing-library/react-native/build/user-event/setup";
import {mockNavigation} from "@/app/utils/test-utils";

jest.mock('@firebase/auth', () => ({
        onAuthStateChanged: jest.fn()
}));
jest.mock('@/firebaseConfig', () => ({
        appAuth: null
}));
jest.spyOn(React, 'useEffect').mockImplementation();
jest.spyOn(React, 'useState').mockImplementation(() => {
    return [true, jest.fn()]
});

describe('OnboardingScreen', () => {
    let user: UserEventInstance;
    beforeAll(() => {
        user = userEvent.setup({ delay: null });
        jest.useFakeTimers();
    })

    let navigation = mockNavigation;

    it('Renders successfully', () => {
        let screen = render(<OnboardingScreen {...navigation}/>);
        expect(screen).toBeDefined();
    });

    it('Switches to Signup successfully', async () => {
        let screen = render(<OnboardingScreen {...navigation}/>);
        const signupButton = screen.getAllByRole("button")[0];

        await user.press(signupButton);
        jest.runAllTimers();
        expect(navigation.navigation.push).toHaveBeenLastCalledWith("Signup");
    });

    it('Switches to Login successfully', async () => {
        let screen = render(<OnboardingScreen {...navigation}/>);
        const signupButton = screen.getAllByRole("button")[1];

        await user.press(signupButton);
        jest.runAllTimers();
        expect(navigation.navigation.push).toHaveBeenLastCalledWith("Login");
    });
})