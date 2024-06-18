import {render} from '@testing-library/react-native';
import React from "react";
import {mockNavigation} from "@/app/utils/test-utils";
import ExportData from "@/app/screens/profile-tab/ExportData";


describe('ExportData', () => {
    it('Renders successfully', () => {
        let exportData = render(<ExportData navigation={mockNavigation.navigation}/>);
        expect(exportData).toBeDefined();
    });
})