import React, { Fragment } from "react";
import { useField } from "formik";
import InputLabel from "@material-ui/core/InputLabel";

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const myError = meta.touched && meta.error;
  return (
    <Fragment>
      <InputLabel htmlFor={label} style={{ color: "white", fontSize: "14px" }}>
        {label}
      </InputLabel>
      <input
        {...field}
        {...props}
        type="text"
        data-tip={myError ? meta.error : ""}
        id={field.name}
        className={`form-control ${myError && "border-danger"}`}
      />
    </Fragment>
  );
};

export const DisplayFormikState = props => (
  <div style={{ margin: "1rem 0" }}>
    <pre
      style={{
        background: "#f6f8fa",
        fontSize: ".65rem",
        padding: ".5rem"
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);

export const myFileInput = ({ label, field, classNames, form, ...props }) => {
  const touched = form.touched[field.name];
  const error = form.errors[field.name];
  const handleFileChange = event => {
    event.preventDefault();
    if (event.currentTarget.files[0] !== undefined) {
      if (event.currentTarget.files[0].type.substring(0, 6) !== "image/") {
        alert("please upload an image type file");
      } else if (event.currentTarget.files[0].size > 5000000) {
        alert("maximum file size is 5mb");
      } else {
        form.setFieldValue("previewImage", event.currentTarget.files[0]);
        // form.setFieldValue(
        //   "previewImage",
        //   URL.createObjectURL(event.currentTarget.files[0])
        // );
        form.setFieldValue("modalIsOpen", true);
        // form.setFieldValue("imageStatus", true);
      }
    }
  };
  const handleFileDelete = () => {
    form.setFieldValue(field.name, "");
    form.setFieldValue("image", "");
    form.setFieldValue("previewImage", null);
  };

  return (
    <div className="input-group my-z-index">
      <div className="custom-file">
        <label
          className={`custom-file-label my-custom-file-label overflow-hidden ${
            touched && error ? "border-danger" : ""
          }`}
          htmlFor={field.name}
          style={{ borderRadius: "5px" }}
        >
          {field.value ? field.value.name : "Choose file"}
        </label>
        <input
          type="file"
          accept="image/*"
          className="custom-file-input input-group"
          name={field.name}
          id={field.name}
          onChange={event => handleFileChange(event)}
        />
      </div>
      <button
        className="btn btn-danger ml-2"
        type="button"
        onClick={handleFileDelete}
      >
        Delete
      </button>
    </div>
  );
};
