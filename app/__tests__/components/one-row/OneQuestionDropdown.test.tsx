import {render} from '@testing-library/react-native';
import OneQuestionDropdown from "@/app/components/one-row/OneQuestionDropdown";

describe('OneQuestionDropdown', () => {
    it('Renders successfully', () => {
        let oneQuestion = render(<OneQuestionDropdown question={"test"} variants={[{label: "test", value: "test"}]}/>);
        expect(oneQuestion).toBeDefined();
    });
})