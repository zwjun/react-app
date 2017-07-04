/*
 * @Author: JUN 
 * @Date: 2017-07-03 17:48:41 
 */

import axios from 'axios';
import actionTypes from './actionTypes';

/**
 * 获取数据
 * @param {*} gank 
 */
export const receiveGank = (gank) => (
  {
    type: actionTypes.GANK_RECEIVE_RESULTS,
    payload: gank
  }
);

export const requestGetGank = (type, count, page) => {
  return (dispatch) => (
    axios.get(`http://gank.io/api/data/${type}/${count}/${page}`)
      .then((response) => {
        dispatch(receiveGank(response.data));
      })
      .catch(error => console.log(error))
  );
}

/**
 * 改变数据类型
 * @param {number} type 
 */
export const changeType = (type) => (
  {
    type: actionTypes.GANK_CHANGE_TYPE,
    payload: type
  }
);