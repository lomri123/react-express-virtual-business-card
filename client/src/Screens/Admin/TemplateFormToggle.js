import React from "react";
import { connect } from "formik";
import QRCode from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function TemplateFormToggle({ formik }) {
  const handleToggleClick = () => {
    const tmpToggleTemplateForm = formik.values.toggleTemplateForm;
    formik.setFieldValue("toggleTemplateForm", !tmpToggleTemplateForm);
  };

  const myLink = `http://localhost:3000/card/${formik.values.username}`;

  return (
    <div className="row">
      <div className="col">
        <h1>
          <p>VB</p>
          <span>Card</span>
        </h1>

        <h2>Virtual Card Details</h2>

        <div className="usage_info mt-4" onClick={handleToggleClick}>
          {formik.values.toggleTemplateForm
            ? "ADD MY DETAILS"
            : "SELECT MY TEMPLATE"}
        </div>
      </div>
      <div className="col d-flex flex-column justify-content-end">
        <div className="py-2">
          <h6 className="text-white ">My Card URL:</h6>
          <QRCode value={myLink} size={90} />
        </div>

        <div className="py-2 ml-1 row">
          <input
            className="form-control col-6"
            disabled="disabled"
            value={myLink}
          />
          <CopyToClipboard text={myLink}>
            <button className="btn btn-secondary mx-2 " type="button">
              copy
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default connect(TemplateFormToggle);
