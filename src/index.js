import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
//import App from './App';
import TabBar from './pages/tabBar';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//监听state变化
store.subscribe(() => {
    console.log('store chang', store.getState())
});

const Root = () => (
  <Provider store={store}>
    <TabBar />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
