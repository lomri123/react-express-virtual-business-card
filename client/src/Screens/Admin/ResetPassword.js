import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import config from "../../config";
import "../../css/Main.css";
import { connect } from "react-redux";
import { _resetPassword } from "../../redux/actions/authActions";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      token: this.props ? this.props.match.params.token : "", // check if there is params and set the token if so
      email: this.props ? this.props.match.params.email : "", // check if there is params and set the email if so
      redirectToLogin: false
    };
  }

  // get query params - this.props.match.params.redirectParam
  componentDidMount() {
    let token = this.props.match.params.token;
    let email = this.props.match.params.email;
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { _resetPassword } = this.props;
    return (
      <div className="admin-signup-section container-signup container">
        {this.state.redirectToLogin ? <Redirect to={`/admin`} /> : null}
        <h3 className="forgot-pass">Reset password</h3>
        <div>
          <input
            className="admin-form"
            onChange={e => this.handleInputChange(e)}
            value={this.state.password}
            name="password"
            type="password"
            placeholder="password"
          />
          <br />
          <Button variant="contained" color="primary" onClick={_resetPassword}>
            set password
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: {} }) => ({});
const mapDispatchToProps = { _resetPassword };

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
