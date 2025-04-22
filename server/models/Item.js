const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  Handle: String,
  Title: String,
  Body: String,
  Vendor: String,
  Type: String,
  Tags: String,
  Option1_Name: String,
  Option1_Value: String,
  Variant_SKU: String,
  Variant_Price: Number,
  Image_Src: String,
});

module.exports = mongoose.model('Item', itemSchema);
