import actionTypes from '../actions/actionTypes';

const initalState = {
    results: []
};

const gank = (state = initalState, action) => {
  
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GANK_RECEIVE_GANK: 
      console.log('22222', payload.results);
      //return Object.assign({}, state, { payload });
      return {
        ...state,
        results: payload.results
      };
      
    default:
      return state;
  }
};

export default gank;
