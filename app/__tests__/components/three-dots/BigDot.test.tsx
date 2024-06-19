import {render} from '@testing-library/react-native';
import BigDot from "@/app/components/three-dots/BigDot";

describe('BigDot', () => {
    it('Renders successfully', () => {
        let dot = render(<BigDot/>);
        expect(dot).toBeDefined();
    });
})