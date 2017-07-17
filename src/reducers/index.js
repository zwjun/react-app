import {combineReducers} from 'redux';

import gank from './gank';
import navBar from './navBar';

export default combineReducers({
  gank,
  navBar
});

/*const reducer = combineReducers({
  gank
});

export default reducer;*/