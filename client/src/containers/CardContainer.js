import React, { Component } from "react";
import BusinessCard from "../Screens/Card/BusinessCard";
import getTemplateData from "./../network/templateService";

class CardContainer extends Component {
  state = {
    cardValues: {}
  };

  async componentDidMount() {
    const myUsername = this.props.match.params.id;
    if (myUsername) {
      try {
        const result = await getTemplateData(myUsername);
        this.setState({ cardValues: result });
      } catch (error) {
        console.log(error);
      }
    }
    // console.log(myUsername);
  }

  checkEmpty(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  render() {
    const { cardValues } = this.state;
    return (
      <div className="container-fluid">
        <div className="mx-auto col-xl-4 col-lg-6 col-md-8 col-sm-10 col-xs-12">
          {this.checkEmpty(cardValues) ? null : (
            <BusinessCard cardValues={cardValues} />
          )}
        </div>
      </div>
    );
  }
}

export default CardContainer;
