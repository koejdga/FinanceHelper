import {render} from '@testing-library/react-native';
import OneQuestion from "@/app/components/one-row/OneQuestion";

describe('OneQuestion', () => {
    it('Renders successfully', () => {
        let oneQuestion = render(<OneQuestion
            inputField={null}
            question={"test"}/>);
        expect(oneQuestion).toBeDefined();
    });
})