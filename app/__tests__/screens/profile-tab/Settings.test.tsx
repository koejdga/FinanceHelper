import {render} from '@testing-library/react-native';
import React from "react";
import Settings from "@/app/screens/profile-tab/Settings";
import {mockedContext, mockNavigation} from "@/app/utils/test-utils";

jest.mock("@/app/utils/SaveLocally", () => ({
    saveData: jest.fn(() => {return true})
}))

jest.mock("@react-navigation/native", () => ({
    useIsFocused: jest.fn(() => {return true}),
    useTheme: jest.fn(() => {return true})
}))
jest.mock( "@/app/enums_and_contexts/EnumsAndContexts", () => ({
    SettingsContext: mockedContext
}));


describe('Settings', () => {
    it('Renders successfully', () => {
        let settings = render(<Settings navigation={mockNavigation.navigation}/>);
        expect(settings).toBeDefined();
    });
})