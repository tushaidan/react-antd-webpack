import '../common/lib';
import App from '../component/App';
import BrowserNav from '../component/mainNav';
import LoginGroup from '../component/inputGroup';
import mainHeaderNav from '../component/mainHeaderNav';
import ReactDOM from 'react-dom';
import React from 'react';   

// ReactDOM.render(
// 	<div>
// 		<LoginGroup />
// 		<BrowserNav />
// 	</div>, document.getElementById('react-content')	
// );
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory,createHashHistory } from 'react-router'



// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
ReactDOM.render(
  <Router history={createHashHistory}>
    <Route component={mainHeaderNav} path="/">
    	<Route component={LoginGroup} path="signIn" />
    </Route>
    <Route path="Nav" component={BrowserNav}>
      	<Route path="datePicker" component={App} />
    </Route>
  </Router>, document.getElementById('react-content'))