import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Claim Summary Report</h1>
            <nav >
                <div id="menucontainer">
                    <div id="menunav">
                        <ul>
                            <li><Link to="">Home</Link></li>
                            <li><Link to="SubmitClaim">Update&Submit Claim</Link></li>
                            <li><Link to="ClaimList">View Claim Summary</Link></li>
                            <li><Link to="">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div id="logout">
                    <Link className="btn btn-outline-primary" to="Login">Logout</Link>
                </div>
            </nav>
        </header>
    );
}
/*
class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Claim Summary Report</h1>
                <nav >
                    <div id="menucontainer">
                        <div id="menunav">
                            <ul>
                                <li><Link to="">Home</Link></li>
                                <li><Link to="SubmitClaim">Update&Submit Claim</Link></li>
                                <li><Link to="ClaimList">View Claim Summary</Link></li>
                                <li><Link to="">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div id="logout">
                        <Link className="btn btn-outline-primary" to="Login">Logout</Link>
                    </div>
                </nav>
            </header>
        );
    }
}
*/
export default Header;

