import {render} from '@testing-library/react-native';
import ListItem from "@/app/components/one-row/ListItem";

describe('ListItem', () => {
    it('Renders successfully', () => {
        let item = render(<ListItem checked title={"test"}/>);
        expect(item).toBeDefined();
    });
})