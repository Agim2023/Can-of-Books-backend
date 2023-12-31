const mongoose = require('mongoose');

const { Schema } = mongoose;

const book1Schema = new Schema({
  name: String,
  author: String,
  description: String,
  status: Boolean,
  year: Number,
});

const Book1 = mongoose.model('Book1', book1Schema);

module.exports = Book1;