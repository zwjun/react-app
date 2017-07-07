/*
 * @Author: JUN 
 * @Date: 2017-07-06 20:19:29 
 */
import React, { Component } from 'react';
import './style.css';
import { InputItem, List, Icon, Button } from 'antd-mobile';

class PasswordLogin extends Component {
  render () {
    return (
      <div className="accountContent">
        <List>
          <InputItem
            placeholder="手机号 / 会员名 / 昵称 / 邮箱"
          >
            <Icon type={require('../../images/people.svg')} />
          </InputItem>
          <InputItem
            placeholder="密码"
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

export default PasswordLogin;