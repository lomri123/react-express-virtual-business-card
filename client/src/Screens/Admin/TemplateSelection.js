import React, { Component } from "react";
import { connect } from "formik";
import SingleTemplate from "./SingleTemplate";

class TemplateSelection extends Component {
  state = {
    templateOptions: [
      "main",
      "beauty",
      "black",
      "green",
      "medical",
      "red",
      "food",
      "intro",
      "wedding",
      "white"
    ]
  };

  handleTemplateClick = e => {
    this.props.formik.setFieldValue("selectedTemplate", e);
  };

  render() {
    return (
      <ul className="row-cols-xl-5 row-cols-lg-4 row-cols-md-4 row-cols-sm-3 myTemplateRow">
        {this.state.templateOptions.map((temaplteName, index) => (
          <SingleTemplate
            handleTemplateClick={this.handleTemplateClick}
            key={temaplteName}
            label={temaplteName}
            imgSrc={index}
          />
        ))}
      </ul>
    );
  }
}

export default connect(TemplateSelection);
