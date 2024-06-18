import {render} from '@testing-library/react-native';
import Separator from "@/app/components/Separator";

describe('Separator', () => {
    it('Renders successfully', () => {
        let separator = render(<Separator/>);
        expect(separator).toBeDefined();
    });
})