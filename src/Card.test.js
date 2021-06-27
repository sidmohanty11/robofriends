import { shallow } from 'enzyme';
import Card from './Card';

it("expect if component is present", () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});