import React from "react";
import { Field } from "formik";
import InputLabel from "@material-ui/core/InputLabel";

import { MyTextInput, myFileInput } from "./InputFields";

export const CardForm = () => (
  <div className="preview_items">
    <div className="row my-2">
      <div className="col">
        <MyTextInput
          name="title"
          placeholder="Enter your title"
          label="Title"
          maxLength="25"
        />
      </div>
      <div className="col">
        <MyTextInput
          name="email"
          placeholder="Enter your email"
          label="Email"
        />
      </div>
    </div>
    <div className="row my-2">
      <div className="col">
        <MyTextInput
          name="address"
          placeholder="Enter your full address"
          label="address"
        />
      </div>
      <div className="col">
        <MyTextInput
          name="facebook"
          placeholder="Enter your Facebook url"
          label="facebook"
        />
      </div>
    </div>
    <div className="row my-2">
      <div className="col">
        <MyTextInput
          name="twitter"
          placeholder="Enter your Twitter url"
          label="twitter"
        />
      </div>
      <div className="col">
        <MyTextInput
          name="whatsapp"
          placeholder="Enter your whatsapp phone number"
          label="whatsapp"
        />
      </div>
    </div>
    <div className="row my-2">
      <div className="col">
        <MyTextInput
          name="youtube"
          placeholder="Enter your youtube url"
          label="youtube"
        />
      </div>
      <div className="col">
        <MyTextInput
          name="phone"
          placeholder="Enter your phone number"
          label="Phone"
        />
      </div>
    </div>
    <div className="row my-2">
      <div className="col">
        <MyTextInput
          name="website"
          placeholder="Enter your website url"
          label="website"
        />
      </div>
      <div className="col">
        <MyTextInput
          name="pinterest"
          placeholder="Enter your pinterest url"
          label="pinterest"
        />
      </div>
    </div>
    <div className="row my-2">
      <div className="col">
        <MyTextInput
          name="linkedin"
          placeholder="Enter your linkedin url"
          label="Linkedin"
        />
      </div>
      <div className="col">
        <InputLabel
          htmlFor="imageFile"
          style={{ color: "white", fontSize: "14px" }}
        >
          Profile picture
        </InputLabel>
        <Field
          name="imageFile"
          component={myFileInput}
          label="Profile picture"
        />
      </div>
    </div>
  </div>
);
