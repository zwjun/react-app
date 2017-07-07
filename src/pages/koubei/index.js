/*
 * @Author: JUN
 * @Date: 2017-07-03 16:05:29 
 */

import React from 'react';
import {connect} from 'react-redux';
import './style.css';

import NavBar from './NavBar';
import * as gank from '../../actions/gank';
import { TYPE_DATA } from './typeData';
import GankList from './GankList'

class Koubei extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      pageText: props.pageText,
      activeKey: "1",
      //type: 1,
      count: 20,
      page: 1,
    }
  }

  componentDidMount() { //加载数据比较块！！！
    this.fetchData()
  }

  fetchData = () => {
    const {type} = this.props;
    console.log(type);
    //获取typeName
    const index = TYPE_DATA.findIndex((e) => e.typeId === type);
    const typeName = TYPE_DATA[index].typeName;

    const {count, page} = this.state;

    return (
      this.props.dispatch(gank.requestGetGank(typeName, count, page))
    );
  }

  handleTabClick = (e) => {
    const type = parseInt(e, 10)
    this.props.dispatch(gank.changeType(type));
    //bug 暂时为解决（type的值没有及时更新）
    setTimeout(() => this.fetchData(), 10)
  }

  handMoreClick = (e) => {
    e.preventDefault();
    console.log('123')
  }

  render () {
    return (
      <div className="container">
        <NavBar activeKey={this.state.activeKey} handleTabClick={this.handleTabClick} />

        <div className="content" >
          <GankList data={this.props.results} type={this.props.type}/>
          <a className="more" onClick={this.handMoreClick}>more...</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
   results: state.gank.results,
   type: state.gank.type
});

export default connect( mapStateToProps )(Koubei);
