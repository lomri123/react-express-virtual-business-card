import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../../css/Main.css";

import {
  _login,
  _signup,
  _isSignedup,
  _logout
} from "../../redux/actions/authActions";
import { connect } from "react-redux";
import ProfileContainer from "./ProfileContainer";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
      username: "",
      token: ""
    };
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.value; // if this is checkbox the value is thr checked attr , else the value is the value attr
    const name = target.name;

    // updating the state with the target name as key and the value var as value
    this.setState({
      [name]: value
    });
  };

  // removing isHaveAccount flag to show the signup
  moveToSignup = e => {
    this.setState({
      isHaveAccount: !this.state.isHaveAccount
    });
  };

  signup = () => {
    const { _signup } = this.props;
    const { password, email } = this.state;
    _signup(email, password);
  };

  login = () => {
    const { _login } = this.props;
    const { password, email } = this.state;
    _login(email, password);
  };

  logout = () => {
    const { _logout } = this.props;
    _logout();
  };

  render() {
    const { isHaveAccount, _isSignedup, token, username } = this.props;

    return (
      <Fragment>
        <div className="">
          {token ? ( // checking if there is a token
            <ProfileContainer
              logout={this.logout}
              token={token}
              username={username}
            />
          ) : (
            <div className="admin-signup-section container-signup container">
              {isHaveAccount ? ( // checking if the user have account and render the login or signup based on that
                <div>
                  <h3> Login </h3>
                  <div>
                    <input
                      className="admin-form"
                      onChange={e => this.handleInputChange(e)}
                      value={this.state.email}
                      name="email"
                      type="text"
                      placeholder="email"
                    />
                    <input
                      className="admin-form"
                      onChange={e => this.handleInputChange(e)}
                      value={this.state.password}
                      name="password"
                      type="password"
                      placeholder="password"
                    />
                    <br />
                    <Button
                      className="btn-signup"
                      variant="contained"
                      color="primary"
                      onClick={this.login}
                    >
                      Login
                    </Button>
                    <Button
                      className="btn-signup"
                      variant="contained"
                      color="primary"
                      onClick={_isSignedup}
                    >
                      Create Account
                    </Button>
                    <br />
                    <Link
                      style={{
                        textDecoration: "none"
                      }}
                      to={{
                        pathname: "/resetpassword"
                      }}
                    >
                      <Button
                        className="btn-signup"
                        variant="outlined"
                        color="primary"
                      >
                        forgot password ?
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <h3> Signup </h3>
                  <div>
                    <input
                      className="admin-form"
                      onChange={e => this.handleInputChange(e)}
                      value={this.state.email}
                      name="email"
                      type="text"
                      placeholder="email"
                    />
                    <input
                      className="admin-form"
                      onChange={e => this.handleInputChange(e)}
                      value={this.state.password}
                      name="password"
                      type="password"
                      placeholder="password"
                    />
                    <br />
                    <Button
                      className="btn-signup"
                      variant="contained"
                      color="primary"
                      onClick={this.signup}
                    >
                      Signup
                    </Button>
                    <Button
                      className="btn-signup"
                      variant="contained"
                      color="primary"
                      onClick={_isSignedup}
                    >
                      Go to Login
                    </Button>
                    <br />
                    <Link
                      style={{
                        textDecoration: "none"
                      }}
                      to={{
                        pathname: "/"
                      }}
                    >
                      <Button
                        className="btn-signup"
                        variant="outlined"
                        color="primary"
                      >
                        Home
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  auth: { test, isHaveAccount, token, username }
}) => ({
  test,
  isHaveAccount,
  token,
  username
});
const mapDispatchToProps = {
  _login,
  _signup,
  _isSignedup,
  _logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
