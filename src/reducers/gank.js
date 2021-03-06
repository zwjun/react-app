import actionTypes from '../actions/actionTypes';

const initalState = {
    results: [],
    type: 1
};

const gank = (state = initalState, action) => {
  
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GANK_CLEAR_RESULTS:
      return {
        ...state,
        results: []
      }
    case actionTypes.GANK_RECEIVE_RESULTS: 
      //return Object.assign({}, state, { results: payload.results });
      //console.log('typeChange', payload.results);
      const data = state.results;
      data.push(...payload.results);
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      return {
        ...state,
        results: data
      };
    case actionTypes.GANK_CHANGE_TYPE:
      return {
        ...state,
        type: payload
      }
    default:
      return state;
  }
};

export default gank;
