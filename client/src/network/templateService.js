// import axios from "axios";
const axios = require("axios");

const getTemplateData = async username => {
  return new Promise((res, rej) => {
    axios
      .get(`http://localhost:3001/card/${username}`)
      .then(response => res(response.data[0]))
      .catch(err => rej(err));
  });
};

export default getTemplateData;
