import {mount} from 'enzyme';
import { shape } from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

const router = {
    history: new BrowserRouter().history,
    route: {
        location: {},
        match: {},
    },
};
const createContext = () => ({
    context: {router},
    childContextTypes: {
        router: shape({
            route: shape({
                location: shape(),
                match: shape(),
            }),
            history: shape({}),
        }),
    }
});

export function mountWithRouter(node) {
    return mount(
        node
        , createContext()
    )
}