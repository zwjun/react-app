import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavBar } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './style.css';
import Avatar from '../../components/Avatar';

class UserInfo extends Component {
  render () {
    return (
      <div className="container">
        {/*header*/}
        <NavBar 
          mode="dark"
          iconName={null}
          leftContent={this.props.pageText}
        />
        <div className="content">
          <div className="avatar">
            <Avatar />
            <Link to={{
              pathname: '/login',
              search: '?sort=name',
              hash: '#the-hash',
              state: { showNavBar: true }
            }}>
              登录/注册>
            </Link>
          </div>
          <img src="http://img2.tuniucdn.com/site/wap/img/member/newhome/msite/avatar.png" alt=""/>
        </div>
      </div>
    )
  }
}

UserInfo.propTypes = {
  pageText: PropTypes.string,
}

UserInfo.defaultProps = {
  pageText: '我的',
};

export default UserInfo;