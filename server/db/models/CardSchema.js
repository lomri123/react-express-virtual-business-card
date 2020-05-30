const mongoose = require("mongoose");

const CardSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String
  },
  facebook: {
    type: String
  },
  address: {
    type: String
  },
  twitter: {
    type: String
  },
  whatsapp: {
    type: String
  },
  youtube: {
    type: String
  },
  website: {
    type: String
  },
  pinterest: {
    type: String
  },
  linkedin: {
    type: String
  },
  image: {
    type: String
  },
  selectedTemplate: {
    type: String
  },
  title: {
    type: String
  },
  phone: {
    type: String
  }
});

module.exports = CardSchema;
