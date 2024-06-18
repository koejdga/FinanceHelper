import {render} from '@testing-library/react-native';
import React from "react";
import CheckEmailExportData from "@/app/screens/profile-tab/CheckEmailExportData";
import {mockNavigation} from "@/app/utils/test-utils";


describe('CheckEmailExportData', () => {
    it('Renders successfully', () => {
        let checkEmailExportData = render(<CheckEmailExportData navigation={mockNavigation.navigation}/>);
        expect(checkEmailExportData).toBeDefined();
    });
})