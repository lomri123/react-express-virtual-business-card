import React, { Component } from "react";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";

import "../../sources/preview/preview.css";

import { CardForm } from "../Card/CardForm";
// import { DisplayFormikState } from "../Card/InputFields";
import { defaultFormValues } from "../../constants/form";
import TemplateSelection from "./TemplateSelection";
import BusinessCard from "../Card/BusinessCard";
import TemplateFormToggle from "./TemplateFormToggle";
import formSubmit from "./../../network/formSubmit";
import ImageEdit from "../Card/ImageEdit";
import { validateSchema } from "./../../constants/validation";
import SetFormikFields from "./SetFormikFields";
import ReactTooltip from "react-tooltip";

class ProfileContainer extends Component {
  render() {
    const { token, username } = this.props;
    return (
      <div>
        <nav className="navbar bg-dark">
          <div className="navbar-nav ml-auto">
            <Button
              className="btn-signup "
              variant="contained"
              color="primary"
              onClick={this.props.logout}
            >
              Logout
            </Button>
          </div>
        </nav>
        <div className="container-fluid">
          <Formik
            initialValues={defaultFormValues}
            onSubmit={values => formSubmit(values, username, token)}
            validationSchema={validateSchema}
          >
            {props => {
              const { values, isSubmitting, handleSubmit, isValid } = props;
              return (
                <form onSubmit={handleSubmit} className="row">
                  <div className="col-md-6 xs-12 p-4 left_content left_background">
                    <TemplateFormToggle />
                    {values.toggleTemplateForm ? (
                      <TemplateSelection />
                    ) : (
                      <CardForm isSubmitting={isSubmitting} />
                    )}
                    <span data-tip={!isValid ? "Please fix issues" : ""}>
                      <button
                        className="btn btn-secondary mt-4"
                        type="submit"
                        disabled={isSubmitting || !isValid}
                        id="submitButton"
                      >
                        Submit
                      </button>
                    </span>
                  </div>

                  <div className="col-md-6 xs-12 p-4 right_background">
                    <div className="iphone_bg mx-auto">
                      <div className="mobile_wrap mx-auto">
                        <BusinessCard cardValues={values} edit />
                      </div>
                    </div>
                  </div>
                  <ImageEdit />
                  {/* <DisplayFormikState props={props} /> */}
                  <SetFormikFields username={username} />
                  <ReactTooltip />
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
}

export default ProfileContainer;
