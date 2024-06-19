import {render} from '@testing-library/react-native';
import CategoryProgressBar from "@/app/components/one-row/CategoryProgressBar";

describe('CategoryProgressBar', () => {
    it('Renders successfully', () => {
        let bar = render(<CategoryProgressBar
            categoryName={"test"}
            deleteFunction={() => {}}
            editFunction={() => {}}
            spent={1}/>);
        expect(bar).toBeDefined();
    });
})