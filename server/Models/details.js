const mongoose = require("mongoose");
const User = require("./user");

const detailsSchema = new mongoose.Schema(
  {
    dob: {
      type: String,
      required: true,
    },
    birthPlace: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Details = mongoose.model("Details", detailsSchema);
module.exports = Details;
