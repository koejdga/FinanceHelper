import {render} from "@testing-library/react-native";
import EmailOnTheWay from "@/app/screens/login-signup/EmailOnTheWay";

describe('EmailOnTheWay', () => {
    it('Renders successfully', () => {
        let form = render(<EmailOnTheWay navigation={jest.fn()}/>);
        expect(form).toBeDefined();
    });
})