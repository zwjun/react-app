import React, { Component } from 'react';
import { TabBar, Icon } from 'antd-mobile';
import './style.css';
import { TAB_BATA } from './data';

class TabBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TAB_BATA,
      selectedTab: 1,
      hidden: false,
    };
  }
  componentDidMount() {
    //get push
    //获取数据判断是否有消息推送
    const advertisement = true;
    const message = 10;

    let TAB_BATA = this.state.TAB_BATA;
    if(advertisement) {
       TAB_BATA[1].badge = true;
    }
    if(message) {
       TAB_BATA[2].dot = true;
    }

    this.setState({
      TAB_BATA
    });
  }

  onPress = (e) => {
    console.log('123');
    e.preventDefault();
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  renderBadge(props) {
    return (
      props ? <span>new</span> : false
    );
  }

  renderDot(props) {
    return (
      props ? <span>new</span> : false
    );
  }

  renderItem(item) {
    const Component = item.component;
    return (
      <TabBar.Item
        icon={<Icon type={item.icon} size="md" />}
        selectedIcon={<Icon type={item.selectedIcon} size="md" />}
        title={item.title}
        key={item.id}
        badge={this.renderBadge(item.badge)}
        dot={this.renderDot(item.dot)}
        selected={this.state.selectedTab === item.id}
        onPress={() => {
          this.setState({
            selectedTab: item.id,
          });
        }}
      >
        <Component 
          pageText={item.title}
          onPress={this.onPress} 
        />
      </TabBar.Item>
    );
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        {this.state.TAB_BATA.map((item) => this.renderItem(item))}
      </TabBar>
    );
  }
}

export default TabBarComponent;
