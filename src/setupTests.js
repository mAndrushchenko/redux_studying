import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// If you're using the fetch API
// import fetch from 'node-fetch';

configure({ adapter: new Adapter() });
// global.fetch = fetch;
