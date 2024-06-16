import {render} from '@testing-library/react-native';
import {SimpleSignUpForm} from "@/app/components/form-components/SimpleSignUpForm";

describe('SimpleSignupForm', () => {
    it('Renders successfully', () => {
        let form = render(<SimpleSignUpForm/>);
        expect(form).toBeDefined();
    });
})