import { createStore } from 'redux';
import myApp from '../reducers/reducer';

//store
let store = createStore(myApp, window.devToolsExtension && window.devToolsExtension());

export default store;