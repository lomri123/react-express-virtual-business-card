var cloudinary = require("cloudinary").v2;
const fs = require("fs");
require("dotenv").config();

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

function uploadToCloudinary(myFile, uniqueFilename) {
  return new Promise((res, rej) => {
    cloudinary.uploader.upload(
      myFile,
      { public_id: `cards/${uniqueFilename}` },
      function (error, result) {
        fs.unlinkSync(myFile);
        if (error) rej(error);
        res(result);
      }
    );
  });
}

module.exports = uploadToCloudinary;
