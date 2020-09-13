import React , { useRef } from 'react';
import { useHistory } from "react-router-dom";

/*
const Login = () => {
    const handleSubmit = () => {
        //e.preventDefault();
        console.log("Maha");
        const history = useHistory();
        history.push("/ClaimList")
      };
    return (
        <form onSubmit={handleSubmit()}>
            <div className="login-wrap">
                <div className="login-html">
                    <div className="login-form">
                        <div className="group">
                            <label  className="label1">Username</label>
                            <input id="user" type="text" className="input" />
                        </div>
                        <div className="group">
                            <label className="label1">Password</label>
                            <input id="pass" type="password" className="input" data-type="password" />
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="Sign In" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
*/

class Login extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        const formData = {};
        for(const field in this.refs){
            console.log(this.refs[field].value);
            formData[field]=this.refs[field].value;
        }
        console.log('-->',formData);
        //const history = useHistory();
        //history.push('/ClaimList');
       this.props.router.push("/ClaimList");
    }

    render() {  

        return (


            <form onSubmit={this.handleSubmit}>
                <div class="login-wrap">
                    <div class="login-html">
                        <div class="login-form">
                            <div class="group">
                                <label for="user" class="label1">Username</label>
                                <input id="user" ref="user" type="text" class="input" />
                            </div>
                            <div class="group">
                                <label for="pass" class="label1">Password</label>
                                <input id="pass" type="password" ref="password" class="input" data-type="password" />
                            </div>
                            <div class="group">
                                <input type="submit" class="button" value="Sign In" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default Login; 