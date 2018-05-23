import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import PostsIndex from './components/post_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import Landing from './components/landing';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(
      reducers, 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}
    >
    <BrowserRouter>
      <div>
        <Switch>
            <Route path='/homepage' component={PostsIndex} />
            <Route path='/posts/new' component={PostsNew} />
            <Route path='/posts/:id' component={PostsShow} />
            <Route path='/' component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();