/**
 * gank action
 */
import axios from 'axios';
import ActionTypes from './actionTypes';

export const receiveGank = (gank) => (
  {
    type: ActionTypes.GANK_RECEIVE_GANK,
    payload: gank
  }
);

export const requestGetGank = () => {
  return (dispatch) => (
    axios.get('http://gank.io/api/search/query/listview/category/福利/count/10/page/1')
      .then((response) => {
        dispatch(receiveGank(response.data));
        console.log('11111', response.data.results)
      })
      .catch(error => console.log(error))
  );
}