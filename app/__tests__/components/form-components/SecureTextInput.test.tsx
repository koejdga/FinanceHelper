import {render, userEvent} from '@testing-library/react-native';
import {SecureTextInput} from "@/app/components/form-components/SecureTextInput";

describe('SecureTextInput', () => {
    it('Renders successfully', () => {
        let formInput = render(<SecureTextInput/>);
        expect(formInput).toBeDefined();
    });

    it('Handles onChangeText successfully', async () => {
        let res = "";
        let formInput  = render(<SecureTextInput testID={"input"} onChangeText={(value) => res = value}/>);
        const input = formInput.getAllByTestId("input")[0];
        let text = "something";
        await userEvent.type(input, text);
        expect(res).toBe(text);
    });
})