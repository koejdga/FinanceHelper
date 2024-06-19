import {render} from '@testing-library/react-native';
import {SimpleLoginForm} from "@/app/components/form-components/SimpleLoginForm";

describe('SimpleLoginForm', () => {
    it('Renders successfully', () => {
        let form = render(<SimpleLoginForm/>);
        expect(form).toBeDefined();
    });
})