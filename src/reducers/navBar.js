/*
 * @Author: JUN 
 * @Date: 2017-07-17 17:10:34 
 */

import actionTypes from '../actions/actionTypes';

const initalState = {
    status: 1
}

const navBar = (state = initalState, action) => {
  
  const { type, payload } = action;

  switch (type) {
    case actionTypes.TABBAR_STAUST: 
      //return Object.assign({}, state, { status: payload });
      return {
        ...state,
        status: payload
      };
    default:
      return state;
  }
};

export default navBar;