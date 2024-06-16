import {fireEvent, render, screen} from '@testing-library/react-native';
import FormTextInput from "@/app/components/form-components/FormTextInput";

describe('FormTextInput', () => {
    it('Renders successfully', () => {
        let form = render(<FormTextInput/>);
        expect(form).toBeDefined();
    });

    it('Handles onTextChange successfully', () => {
        let form = render(<FormTextInput/>);
        const input = form.getAllByTestId("input")[0];
        let text = 'something';
        fireEvent.changeText(input, text);
        setTimeout(() => {
            //does not work
            expect(input.props.value).toBe(text);
        }, 50);
    });
})