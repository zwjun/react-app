/*
 * @Author: JUN 
 * @Date: 2017-07-07 13:49:05 
 */

import React, { Component } from 'react';
import { NavBar, Tabs, Flex } from 'antd-mobile';
import './style.css';
import PasswordLogin from './PasswordLogin';
import CodeLogin from './CodeLogin';
import weiboIcon from '../../images/weibo.png';
import qqIcon from '../../images/qq.png';

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeCompontent: "1",
      showNavBar: false
    }
  }

  componentDidMount() {
    const state = this.props.location.state;
    if(state) {
      this.setState({showNavBar: state.showNavBar})
    }
  }

  handleTabClick = (key) => { 
    console.log(key);
    this.setState({
      activeCompontent: key
    })
  }

  goBack() {
    const history = this.props.history;
    history.goBack()
  }
  
  render () {
    // console.log('====================================');
    // console.log(this.props);
    // console.log('====================================');
    return (
      <div className="container">
        {/*header*/}
        { this.state.showNavBar 
          ? <NavBar 
              mode="dark"
              iconName="cross"
              leftContent={this.props.pageText}
              onLeftClick={() => this.goBack()}
            />
          : null }
        <Tabs defaultActiveKey="1" onTabClick={(key) => this.handleTabClick(key)}>
          <Tabs.TabPane tab="密码登录" key="1" />
          <Tabs.TabPane tab="验证码登录" key="2" />
        </Tabs>
        { this.state.activeCompontent === '1' 
          ? <PasswordLogin {...this.props} />
          : <CodeLogin {...this.props} />
        }
        <Flex justify="center">
          <span>注册新用户</span>
          <span className="separator lineColor" />
          <span>找回密码</span>
        </Flex>
        {/*其他登录方式*/}
        <div className="thirdParty">
          <div className="thirdPartyTitle">
            <span className="striping lineColor" />
            <span style={{color: '#999'}} >第三方登录</span>
            <span className="striping lineColor" />
          </div>
          <div className="thirdPartyIcon">
            <a><img src={qqIcon} alt=""/></a>
            <a><img src={weiboIcon} alt=""/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Login

