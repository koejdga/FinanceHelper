import {render} from '@testing-library/react-native';
import EditIconProfile from "@/app/components/icons/EditIconProfile";

describe('EditIconProfile', () => {
    it('Renders successfully', () => {
        let icon = render(<EditIconProfile/>);
        expect(icon).toBeDefined();
    });
})