import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/LoginComponent.jsx';
import Header from './components/Headercomponent.jsx';
import ClaimUpdate from './components/ClaimUpdateComponent.jsx';
import ClaimList from './components/ClaimList';
import Footer from './components/FooterComponent.jsx';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
import SubmitClaim from './components/SubmitClaim.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
        <IndexRoute component={Login} />
        <Route path="/ClaimUpdate" component={ClaimUpdate} />
        <Route path="/ClaimList" component={ClaimList} />
        <Route path="/" component={Login} />
        <Route path="/Login" component={Login} />
        <Route path="/update/:id" component={ClaimUpdate} />
        <Route path="/SubmitClaim" component={SubmitClaim} />
    </Router>
), document.getElementById('router'));
  