import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/combinereducers';
let store = createStore(rootReducers,applyMiddleware(thunk));

export default store;