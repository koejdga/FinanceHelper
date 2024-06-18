import {render} from '@testing-library/react-native';
import React from "react";
import ProfileStack from "@/app/screens/profile-tab/ProfileStack";

jest.mock('@/firebaseConfig', () => ({
    appAuth: {
        signOut: jest.fn(() => {return Promise.resolve()})
    }
}));

describe('ProfileStack', () => {
    it('Renders successfully', () => {
        let profile = render(<ProfileStack/>);
        expect(profile).toBeDefined();
    });
})