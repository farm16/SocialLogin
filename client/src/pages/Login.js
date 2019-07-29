import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  loginUser,
  registerGoogle,
  registerFacebook
} from '../actions/actions';
import logo from '../assets/errundsLogo.png'; // with import
import './style.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {} //collect errors
    };
  }
  onFailure = error => {
    alert(error);
  };
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
  facebookResponse = response => {
    console.log(response);
    this.props.registerFacebook(response, this.props.history);
  };
  googleResponse = response => {
    this.props.registerGoogle(response, this.props.history);
  };
  render() {
    return (
      <div className="container text-center ">
        <div className="row">
          <div className="col-12 align-self-center">
            <form onSubmit={this.onSubmit} className="form-signin">
              <img src={logo} alt="Logo" className="m-3 p-3" />
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <label className="sr-only">Email address</label>
              <input
                onChange={this.onChange}
                value={this.state.email}
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
                required=""
                autoComplete=""
              />
              <label className="sr-only">Password</label>
              <input
                onChange={this.onChange}
                value={this.state.password}
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
                required=""
                autoComplete=""
              />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button
                className="shadow-sm btn btn-lg btn-primary btn-block"
                type="submit">
                Sign in
              </button>
              <FacebookLogin
                appId="2285143261761855"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.facebookResponse}
                cssClass="my-2 shadow-sm btn btn-lg btn-block btn-primary active"
                // render={renderProps => (
                //   <button
                //     id="btn-facebook"
                //     className="shadow-sm btn btn-lg btn-primary btn-block"
                //     onClick={renderProps.onClick}>
                //     Sign In with Facebook
                //   </button>
                // )}
              />
              <GoogleLogin
                clientId="1041349662809-7puai447qj6p2i90tbfvgpat6s66a30n.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.googleResponse}
                onFailure={this.onFailure}
                render={renderProps => (
                  <button
                    id="btn-google"
                    className="shadow-sm btn btn-lg btn-primary btn-block"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}>
                    Sign In with Google
                  </button>
                )}
              />
              <p className="mt-5 mb-3 text-muted">2019 © </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser, registerGoogle, registerFacebook }
)(Login);
