import React, { Component } from "react";

class SingleTemplate extends Component {
  render() {
    const { handleTemplateClick, imgSrc, label } = this.props;
    return (
      <li onClick={() => handleTemplateClick(label)} className="btn">
        <span className="text-white">{label}</span>
        <img
          src={require(`../../sources/preview/images/${imgSrc + 1}.png`)}
          style={{ display: "block", maxWidth: "100%" }}
        />
      </li>
    );
  }
}

export default SingleTemplate;
