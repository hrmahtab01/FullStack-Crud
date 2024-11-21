const { text } = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

let modelSchema = new Schema({
  name:String,
  gmail:String,
  number:Number
});

const todoSchema = mongoose.model("todoapp", modelSchema);
module.exports = todoSchema;
