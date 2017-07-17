import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import TabBar from './pages/tabBar';
import Login from './pages/account/Login';
import createHistory from 'history/createBrowserHistory';

const history = createHistory()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: true
    }
  }
  
  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          {/*重定向，做登录判断*/}
          <Route exact path="/" render={() => (
            !this.state.loggedIn ? (
              <Redirect to="/login" />
            ) : (
              <TabBar />
            )
          )}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
