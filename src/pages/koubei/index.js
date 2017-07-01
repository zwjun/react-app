import React from 'react';
//import PropTypes from 'prop-types';
import { NavBar, Icon } from 'antd-mobile';
import {connect} from 'react-redux';
//import axios from 'axios';

import * as gank from '../../actions/gank';

const Item = ({item}) => (
  <div>
    <img style={{width: '100%'}} src={item.url} alt="img"/>
  </div>
);

class Koubei extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      pageText: props.pageText
    }
  }

  componentDidMount() { //加载数据比较块！！！
    /*axios.get('http://gank.io/api/search/query/listview/category/福利/count/10/page/1')
      .then((response) => {
        //console.log(response.data);
        this.setState({  
          isLoading: false,  
          results: response.data.results
        })  
      })
      .catch((error) => {
        console.log(error);
      });*/

    this.props.dispatch(gank.requestGetGank());
  }
  //http://gank.io/api/search/query/listview/category/福利/count/20/page/1
  /*componentDidMount() {
    fetch('http://gank.io/api/search/query/listview/category/福利/count/20/page/8')//请求地址  
      .then((response) => response.json())//取数据  
      .then((response) => {//处理数据  
          //通过setState()方法重新渲染界面  
          this.setState({  
              //改变加载ListView  
              isLoading: false,  
              //设置数据源刷新界面  
              results: response.results  
          })  
          console.log(response)
      })  
      .catch((error) => {  
          console.warn(error);  
      })  
  }*/

  /*renderItem(item) {
    return (
      <div key={item.ganhuo_id}>
        <img style={{width: '100%'}} src={item.url} alt="img"/>
      </div>
    )
  }*/

  render () {
    return (
      <div style={{ flex: 1 }}>
        <NavBar 
          mode="dark"
          iconName={null}
          leftContent={this.state.pageText}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        />
        {/*{this.state.results.map((res) => this.renderItem(res))}*/}
        {this.props.results.map((res) => <Item  key={res.ganhuo_id} item={res} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
   results: state.gank.results
});

export default connect( mapStateToProps )(Koubei);
