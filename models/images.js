const { Schema, model } = require("mongoose");

const carouselSchema = new Schema(
  {
    carouselLanding: Number,
    HomeId: String,
    HomeData: String,
  },
  { timestamps: true }
);
module.exports = model("carousel", carouselSchema);