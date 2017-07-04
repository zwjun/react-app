import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const store = createStore(
      reducer,
      applyMiddleware(thunk)
    );

export default store;
/*export default () => {
  // 根据 reducer 初始化 store
    const store = createStore(
      reducer,
      applyMiddleware(thunk)
      );
    return store;
}*/