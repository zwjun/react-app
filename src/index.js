import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//监听state变化
// store.subscribe(() => {
//     console.log('store change', store.getState())
// });
//const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
