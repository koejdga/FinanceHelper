import {render} from '@testing-library/react-native';
import WigglyIcon from "@/app/components/icons/WigglyIcon";
import AddIcon from "@/app/components/icons/AddIcon";
import React from "react";

jest.spyOn(React, "useEffect").mockImplementation();
describe('WigglyIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<WigglyIcon icon={<AddIcon/>}/>);
        expect(icon).toBeDefined();
    });
})