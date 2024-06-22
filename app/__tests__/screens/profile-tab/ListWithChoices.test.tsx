import {render} from '@testing-library/react-native';
import React, {createContext} from "react";
import {mockedContext, mockNavigation} from "@/app/utils/test-utils";
import ListWithChoices from "@/app/screens/profile-tab/ListWithChoices";

jest.mock("@/app/utils/SaveLocally", () => ({
   saveData: jest.fn(() => {return true})
}))
jest.mock( "@/app/enums_and_contexts/EnumsAndContexts", () => ({
    SettingsContext: mockedContext
}));

describe('ListWithChoices', () => {
    it('Renders successfully', () => {
        let list = render(<ListWithChoices {...mockNavigation}/>);
        expect(list).toBeDefined();
    });
})