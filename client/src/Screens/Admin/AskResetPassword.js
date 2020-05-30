import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Swal from "sweetalert2";
import config from "../../config";
import "../../css/Main.css";
import { connect } from "react-redux";

import { _askResetPassword } from "../../redux/actions/authActions";

const Style = {
  container: {
    width: "80%",
    flex: 1,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
  }
};

class AskResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  // get query params - this.props.match.params.redirectParam

  handleInputChange = e => {
    //e.preventDefault()

    const target = e.target;
    const value = target.value;
    const name = target.name;
    // updating the state with the target name as key and the value var as value
    this.setState(
      {
        [name]: value
      },
      () => {
        if (config.__DEBUGGING__) {
          console.log(this.state[name]);
        }
      }
    );
  };

  render() {
    const { _askResetPassword } = this.props;
    return (
      <div className="admin-signup-section container-signup container">
        <h3 className="forgot-pass">enter email</h3>
        <div>
          <input
            className="admin-form"
            onChange={e => this.handleInputChange(e)}
            value={this.state.email}
            name="email"
            type="text"
            placeholder="email"
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={_askResetPassword}
          >
            reset
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: {} }) => ({});
const mapDispatchToProps = { _askResetPassword };

export default connect(mapStateToProps, mapDispatchToProps)(AskResetPassword);
