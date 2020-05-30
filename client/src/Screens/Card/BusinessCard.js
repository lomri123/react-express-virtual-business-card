import React, { Component } from "react";
import ReactFitText from "react-fittext";

import SingleIcon from ".//SingleIcon";
import getTemplateCss from "../../sources/getTemplateCss";
import { formikIconNames } from "../../constants/form";

class BusinessCard extends Component {
  returnFormikFieldsWithData() {
    const { cardValues } = this.props;
    const tmpFormikFields = [];
    for (let i = 0; i < 10; i++) {
      if (cardValues[formikIconNames[i]] !== "") {
        tmpFormikFields.push([
          [formikIconNames[i]],
          cardValues[formikIconNames[i]]
        ]);
      }
    }
    return tmpFormikFields;
  }

  returnImage(styles) {
    const { image, previewImage } = this.props.cardValues;
    if (previewImage) {
      return <img src={previewImage} style={styles.image} alt="profile" />;
    }
    if (image && image !== "") {
      return <img src={image} style={styles.image} alt="profile" />;
    }
    return null;
  }

  render() {
    const { title, selectedTemplate } = this.props.cardValues;
    const { edit } = this.props;
    const styles = getTemplateCss(selectedTemplate);
    return (
      <div
        className={`container-fluid text-center overflow-auto  ${
          edit ? "my-business-card-edit" : ""
        }`}
        style={styles.container}
      >
        <ReactFitText>
          <h2 className="pt-3 mb-3  text-break">{title}</h2>
        </ReactFitText>

        <div>{this.returnImage(styles)}</div>
        <ReactFitText compressor={2}>
          <div className="d-flex justify-content-around flex-wrap my-icon my-3">
            {this.returnFormikFieldsWithData().map((field, index) => {
              return (
                <SingleIcon
                  label={field[0]}
                  key={field[0]}
                  style={styles.icon}
                  data={field[1]}
                />
              );
            })}
          </div>
        </ReactFitText>
      </div>
    );
  }
}

export default BusinessCard;
