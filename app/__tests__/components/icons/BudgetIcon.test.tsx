import {render} from '@testing-library/react-native';
import BudgetIcon from "@/app/components/icons/BudgetIcon";

describe('BudgetIcon', () => {
    it('Renders successfully', () => {
        let icon = render(<BudgetIcon/>);
        expect(icon).toBeDefined();
    });
})