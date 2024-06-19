import {render} from '@testing-library/react-native';
import React from "react";
import {mockNavigation} from "@/app/utils/test-utils";
import Profile from "@/app/screens/profile-tab/Profile";

jest.mock('@/firebaseConfig', () => ({
    appAuth: {
        signOut: jest.fn(() => {return Promise.resolve()}),
        currentUser: {
            displayName: "test"
        }
    }
}));

jest.mock("@firebase/auth", () => ({
    updateProfile: jest.fn(() => {return Promise.resolve()})
}))

describe('Profile', () => {
    it('Renders successfully', () => {
        let profile = render(<Profile {...mockNavigation}/>);
        expect(profile).toBeDefined();
    });
})