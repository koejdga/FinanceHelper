import {render} from '@testing-library/react-native';
import SmallDot from "@/app/components/three-dots/SmallDot";

describe('SmallDot', () => {
    it('Renders successfully', () => {
        let dot = render(<SmallDot/>);
        expect(dot).toBeDefined();
    });
})