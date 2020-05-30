import axios from "axios";

export default function formSubmit(values, username, token) {
  const formData = new FormData();
  formData.append("username", `${username}`);
  const unwantedFields = ["imageFile", "toggleTemplateForm", "previewImage"];
  const myFormValues = {};
  for (const field in values) {
    if (!unwantedFields.includes(field)) {
      myFormValues[field] = values[field];
    }
  }
  formData.append("values", JSON.stringify(myFormValues));

  if (values.imageFile !== undefined) {
    // console.log(values.imageFile);
    formData.append("img", values.imageFile);
  }
  axios({
    method: "put",
    url: "http://localhost:3001/card/change",
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  })
    .then(res => {
      console.log(res);
      alert("All changes were saved successfully");
    })
    .catch(err => {
      console.log(err);
    });
}
