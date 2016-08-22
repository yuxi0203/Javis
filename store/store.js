import { createStore } from 'redux';
import myApp from '../reducers/reducer';

//store
let store = createStore(myApp);

export default store;