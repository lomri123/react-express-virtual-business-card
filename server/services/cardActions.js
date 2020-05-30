const mongoose = require("mongoose");
const CardSchema = require("../db/models/CardSchema");
const uploadToCloudinary = require("../services/cloudinary");
const Card = mongoose.model("cards", CardSchema);

const fetchCard = id => {
  console.log("called fetchCard", id);
  return Card.find({ username: id });
};

const updateCard = async (email, updateData, myFile) => {
  console.log("updateData ", updateData);
  let myUpdateData = { ...updateData };
  try {
    const card = await Card.find({ username: email });
    if (myFile) {
      console.log("called upload to cloudinary");
      const result = await uploadToCloudinary(myFile, email);
      myUpdateData["image"] = result.secure_url;
      // console.log("my cloudinary ", result.secure_url);
    }
    if (card.length > 0) {
      return Card.findByIdAndUpdate(card[0]._id, {
        $set: myUpdateData
      });
    } else {
      return "wrong username";
    }
  } catch (err) {
    console.log("error updating", err);
    return err;
  }
};

const addCard = username => {
  const card = username;
  const tmpCardSchema = new Card(card);
  const result = tmpCardSchema.save();
  return result;
};

module.exports = {
  addCard,
  updateCard,
  fetchCard
};
