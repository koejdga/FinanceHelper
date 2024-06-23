import {render} from '@testing-library/react-native';
import React from "react";
import ProfileStack from "@/app/screens/profile-tab/ProfileStack";

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
}));

jest.mock("@/app/utils/InteractionsWithFiles", () => ({
    shareReport: jest.fn(() => {return Promise.resolve(true)})
}));

jest.mock("@/app/utils/SaveLocally", () => ({
    saveData: jest.fn(() => {return Promise.resolve(true)})
}));


describe('ProfileStack', () => {
    it('Renders successfully', () => {
        let profile = render(<ProfileStack/>);
        expect(profile).toBeDefined();
    });
})