/*
 * @Author: JUN 
 * @Date: 2017-07-17 17:05:32 
 */

 import actionTypes from './actionTypes';

 /**
  * tabBar状态
  * @param {*} status 
  */
 export const selectedTab = (status) => (
  {
    type: actionTypes.TABBAR_STAUST,
    payload: status
  }
);