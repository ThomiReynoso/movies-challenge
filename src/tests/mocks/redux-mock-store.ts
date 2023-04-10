import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'; //ES6 modules

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

export default mockStore;
