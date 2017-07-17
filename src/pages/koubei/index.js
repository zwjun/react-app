/*
 * @Author: JUN
 * @Date: 2017-07-03 16:05:29 
 */

import React from 'react';
import {connect} from 'react-redux';
import { ActivityIndicator } from 'antd-mobile';
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
      page: 0,
    }
  }

  componentWillMount() {
    
  }

  componentDidMount() { //加载数据比较块！！！
    this.fetchData(this.props.type);
  }

  fetchData = (type, page=this.state.page, isLoading=true) => {
    ++page;
    this.setState({ 
      isLoading
    });
    //获取typeName
    const index = TYPE_DATA.findIndex((e) => e.typeId === type);
    const typeName = TYPE_DATA[index].typeName;
    const {count} = this.state;

    return (
      this.props.dispatch(gank.requestGetGank(typeName, count, page))
        .then((data) => {
          this.setState((prevState, props) => {
            return {
              isLoading: false,
              page
            }
          });
          // console.log('====================================');
          // console.log(data);
          // console.log('====================================');
        })
    );
  }

  handleTabClick = (e) => {
    this.setState({ page: 0})
    const type = parseInt(e, 10)
    this.props.dispatch(gank.changeType(type));
  }

  MoreOnClick = (e) => {
    this.fetchData(this.props.type, this.state.page, false)
  }

  renderActivityIndicator() {
    return (
      <div className="loading">
        <ActivityIndicator
          text="Loading..."
        />
      </div>
    )
  }

  render () {
    return (
      <div className="container">
        <NavBar activeKey={this.state.activeKey} handleTabClick={this.handleTabClick} />

        <div className="content" >
          { this.state.isLoading
          ? this.renderActivityIndicator()
          : <div>
              <GankList data={this.props.results} type={this.props.type}/>
              <a className="more" onClick={this.MoreOnClick}>more...</a>
            </div>}
        </div>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    //判断type是否变化，变化则重新fetch
    console.log('====================================');
    console.log(this.props.type);
    console.log(nextProps.type);
    console.log('====================================');
    
    if(this.props.type !== nextProps.type) {
      this.props.dispatch(gank.clearResults());
      this.fetchData(nextProps.type, 0)
    }
  }

}

const mapStateToProps = (state) => ({
   results: state.gank.results,
   type: state.gank.type
});

export default connect( mapStateToProps )(Koubei);
