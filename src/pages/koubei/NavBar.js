import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd-mobile';
import { TYPE_DATA } from './typeData';

const NavBar = (props) => {
  const TabPane = Tabs.TabPane;
  return (
    <Tabs defaultActiveKey={props.activeKey} pageSize={5} onTabClick={props.handleTabClick}>
      {TYPE_DATA.map((type) => {
        return  <TabPane tab={type.typeName} key={type.typeId} /> 
      })}
    </Tabs>
  )
}

NavBar.propTypes = {
  handleTabClick: PropTypes.func,
  activeKey: PropTypes.string
}

NavBar.defaultProps = {
  activeKey: "1",
  handleTabClick: () => {}
};

export default NavBar