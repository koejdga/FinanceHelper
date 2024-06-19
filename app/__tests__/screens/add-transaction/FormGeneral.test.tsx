import {render} from '@testing-library/react-native';
import {mockNavigation} from "@/app/utils/test-utils";
import AddFormGeneral from "@/app/screens/add-transaction/FormGeneral";

jest.mock("react-native-date-picker")
describe('AddFormGeneral', () => {
    it('Renders successfully', () => {
        let form = render(<AddFormGeneral {...mockNavigation}/>);
        expect(form).toBeDefined();
    });
})