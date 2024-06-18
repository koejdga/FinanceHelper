import {render} from '@testing-library/react-native';
import React from "react";
import {mockNavigation} from "@/app/utils/test-utils";
import ListWithChoices from "@/app/screens/profile-tab/ListWithChoices";


describe('ListWithChoices', () => {
    it('Renders successfully', () => {
        let list = render(<ListWithChoices {...mockNavigation}/>);
        expect(list).toBeDefined();
    });
})