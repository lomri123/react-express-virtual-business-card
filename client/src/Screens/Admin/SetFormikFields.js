import React, { useEffect } from "react";
import { connect } from "formik";
import getTemplateData from "../../network/templateService";
import { getUsername } from "../../utils";
import { neededFormikFields } from "../../constants/form";

function SetFormikFields({ username, formik }) {
  useEffect(() => {
    const myUsername = username || getUsername();
    if (myUsername) {
      (async function() {
        try {
          const result = await getTemplateData(myUsername);
          if (result) {
            neededFormikFields.forEach(field => {
              if (result[field] !== undefined) {
                formik.setFieldValue(field, result[field]);
              }
            });
          }
          formik.setFieldValue("username", myUsername);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);
  return null;
}

export default connect(SetFormikFields);
