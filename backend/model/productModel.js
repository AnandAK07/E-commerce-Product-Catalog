const mongoose = require("mongoose");

const mongooseSchema = mongoose.Schema({
  name: { type: String, required: true },

  price: { type: Number, required: true },

  category: { type: String, required: true },

  inStock: { type: Boolean, required: true },
});

const model = mongoose.model("products", mongooseSchema);

module.exports = { model };
