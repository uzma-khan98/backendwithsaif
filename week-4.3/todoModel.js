import mongoose from "mongoose";

//* single todo structure
const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
})

//* todo model
export const Todo = mongoose.model("Todo", todoSchema);

