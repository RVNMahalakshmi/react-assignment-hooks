import React from 'react';
import Login from './components/LoginComponent.jsx';
import ClaimUpdate from './components/ClaimUpdateComponent.jsx';
import ClaimList from './components/ClaimList';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import SubmitClaim from './components/SubmitClaim.jsx';

const App = () => {
    return (

        <Router>

            <Switch>
                <Route exact path="/ClaimUpdate" component={ClaimUpdate} />
                <Route exact path="/ClaimList" component={ClaimList} />
                <Route exact path="/" component={Login} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/update/:id" component={ClaimUpdate} />
                <Route exact path="/SubmitClaim" component={SubmitClaim} />
            </Switch>
        </Router>
    );
};
export default App;
