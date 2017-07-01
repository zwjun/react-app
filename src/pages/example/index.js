import React from 'react'
import PropTypes from 'prop-types';
import { NavBar, Icon } from 'antd-mobile';
import './style.css';

export const Example = (props) => {  
  return(
    <div className="container">
      {/*header*/}
      <NavBar 
        mode="dark"
        iconName={null}
        leftContent={props.pageText}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      />

      {/*body container*/}
      <div style={{ flex: 1, backgroundColor: '#fff' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{props.pageText}” tab， 当前展示“{props.pageText}”信息</div>
        <a href="#javascript:;"
          style={{ display: 'block', marginTop: 40, color: '#108ee9' }}
          onClick={(e) => props.onPress(e)} 
        >
          点击切换 tab-bar 显示/隐藏
        </a>
      </div>
    </div>
  );
}

Example.propTypes = {
  pageText: PropTypes.string,
  onPress: PropTypes.func
};

Example.defaultProps = {
  pageText: 'Hello',
  onPress: () => {}
};

export default Example;