import {render} from '@testing-library/react-native';
import React from "react";
import {mockNavigation} from "@/app/utils/test-utils";
import Limits from "@/app/screens/transaction-tab/Limits";

jest.mock("@/app/utils/ServerCommunication", () => (
    {
        deleteCategory: jest.fn(),
        getAllCategories: jest.fn(() => {return []}),
    }
))

jest.mock('@/firebaseConfig', () => {
    return {
        appAuth: null
    }
});

jest.mock("@react-navigation/native", () => (
    {
        ...jest.requireActual("@react-navigation/native"),
        useIsFocused: jest.fn(() => {return true}),
        useTheme: jest.fn( () => {
                return  { ...jest.requireActual("@react-navigation/native").useTheme(),
                    dark: true}
            }
        )
    }
))

describe('Limits', () => {
    it('Renders successfully', () => {
        let limits = render(<Limits {...mockNavigation}/>);
        expect(limits).toBeDefined();
    });
})