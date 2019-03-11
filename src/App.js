import React, {Component} from 'react';
import './App.css';
import Navigator from './components/nav/index';
import {Router, Route} from 'react-router-dom';
import 'element-theme-default';
import createHistory from 'history/createBrowserHistory';
import {routes} from './utils/routers';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<BrowserRouter basename='/starter'>*/}
        <Router history={history}>
          {/*
          * Router标签内不可有多个子标签
           */}
          <div>
            <Navigator/>
            {
              routes.map((route, index) => {
                return (
                  <Route path={route.path} component={route.component}
                         key={index}/>
                );
              })
            }
          </div>
        </Router>
        {/*</BrowserRouter>*/}
      </div>
    );
  }
}

export default App;
