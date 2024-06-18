import {render} from '@testing-library/react-native';
import React from "react";
import Settings from "@/app/screens/profile-tab/Settings";
import {mockNavigation} from "@/app/utils/test-utils";

describe('Settings', () => {
    it('Renders successfully', () => {
        let settings = render(<Settings navigation={mockNavigation.navigation}/>);
        expect(settings).toBeDefined();
    });
})