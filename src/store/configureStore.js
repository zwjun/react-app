import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const store = createStore(
      reducer,
      applyMiddleware(thunk)
    );
// const state = store.getState();
// console.log(state);
export default store;
