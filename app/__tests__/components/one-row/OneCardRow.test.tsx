import {render} from '@testing-library/react-native';
import OneCardRow from "@/app/components/one-row/OneCardRow";

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