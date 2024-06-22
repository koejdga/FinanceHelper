import {render} from '@testing-library/react-native';
import OneCardRow from "@/app/components/one-row/OneCardRow";
import {mockedContext} from "@/app/utils/test-utils";

jest.mock("@/app/utils/Utils", () => ({
    convertNumberToMoney: jest.fn(() => {return "123"})
}));

jest.mock( "@/app/enums_and_contexts/EnumsAndContexts", () => ({
    SettingsContext: mockedContext
}));


describe('OneCardRow', () => {
    it('Renders successfully', () => {
        let row = render(<OneCardRow
            amountOfMoney={1}
            deleteFunction={()=>{}}
            editFunction={()=>{}}
            typeOfCard={"test"}/>);
        expect(row).toBeDefined();
    });
})