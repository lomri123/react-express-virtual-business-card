import React from "react";

import { createHref } from "../../utils";
import { fontAwesomeNames } from "../../constants/form";

function SingleIcon({ label, style, data }) {
  const myName = `fa fa-${fontAwesomeNames[label]} fa-3x my-card-icon`;
  const handleIconClick = () => {
    const link = createHref(label[0], data);
    window.open(link, "_blank");
  };
  return (
    <div onClick={e => handleIconClick(e)} style={style}>
      <i className={myName} />
      <div style={style.iconText !== undefined ? style.iconText : {}}>
        {label}
      </div>
    </div>
  );
}

export default SingleIcon;
