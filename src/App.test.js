import App from './App';
import { shallow } from 'enzyme';

it("check if app component is nicely rendered", () => {
    expect(shallow(<App />)).toMatchSnapshot();
})