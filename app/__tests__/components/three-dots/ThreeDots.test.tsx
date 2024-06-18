import {render} from '@testing-library/react-native';
import ThreeDots from "@/app/components/three-dots/ThreeDots";

describe('ThreeDots', () => {
    it('Renders successfully', () => {
        let dot = render(<ThreeDots bigNumber={3}/>);
        expect(dot).toBeDefined();
    });
})