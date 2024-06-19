import {render} from '@testing-library/react-native';
import React from "react";
import EmptyScreen from "@/app/screens/EmptyScreen";

describe('EmptyScreen', () => {
    it('Renders successfully', () => {
        let empty = render(<EmptyScreen/>);
        expect(empty).toBeDefined();
    });
})