/*
 * @Author: JUN 
 * @Date: 2017-07-06 20:19:29 
 */
import React, { Component } from 'react';
import './style.css';
import { InputItem, List, Icon, Button } from 'antd-mobile';

class CodeLogin extends Component {
  render () {
    return (
      <div className="accountContent">
        <List>
          <InputItem
            placeholder="no label"
          >
            <Icon type={require('../../images/phone.svg')} />
          </InputItem>
            
          <InputItem
            placeholder="title can be icon，image or text"
          >
            <Icon type={require('../../images/cc-lock.svg')} />
          </InputItem>
        </List>
        <div className="loginButton">
          <Button className="btn" type="primary">登录</Button>
        </div>
      </div>
    )
  }
}

export default CodeLogin;