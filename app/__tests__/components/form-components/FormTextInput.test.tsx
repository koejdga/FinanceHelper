import {render, userEvent} from '@testing-library/react-native';
import FormTextInput from "@/app/components/form-components/FormTextInput";

describe('FormTextInput', () => {
    it('Renders successfully', () => {
        let formInput = render(<FormTextInput/>);
        expect(formInput).toBeDefined();
    });

    it('Handles onChangeText successfully', async () => {
        let res = "";
        let formInput  = render(<FormTextInput testID={"input"} onChangeText={(value) => res = value}/>);
        const input = formInput.getAllByTestId("input")[0];
        let text = "something";
        await userEvent.type(input, text);
        expect(res).toBe(text);
    });
})