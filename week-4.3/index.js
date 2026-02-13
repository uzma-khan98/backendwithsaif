import express from "express";
import mongoose from "mongoose";
import { Todo } from "./todoModel.js";

const app = express();

app.use(express.json());

async function connectDB() {
  const connection = await mongoose.connect(
    "mongodb://localhost:27017/myFirstTodoApp"
  );

  if (connection) {
    console.log("App is connected to database");
  }
}
connectDB();

// functions to create,delete and update todos
app.post("/create", async (req, res) => {
  const { text } = req.body;
  if (!text) {
    res.status(404).json({
      msg: "All fields are required",
    });
  }
  const newTodo = await Todo.create({
    text,
    completed: false,
  });

  res.status(200).json({
    msg: "Todo created successfully",
    newTodo,
  });
});

// update todo,
app.put("/update/:id", async (req, res) => {
  const todoId = req.params.id;

  const updateTodo = await Todo.findByIdAndUpdate(
    todoId,
    {
      completed: true,
    },
    { new: true }
  );

  res.status(200).json({
    msg: "Todo updated successfully",
    updateTodo,
  });
});

// delete todo,
app.delete("/delete/:id", async (req, res) => {
  const todoId = req.params.id;

  await Todo.findByIdAndDelete(todoId);

  res.status(200).json({
    msg: "Todo is deleted",
  });
});

// to get all todos,
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json({
    msg: "We get all todos",
    todos,
  });
});

// to get a specific todo,
app.get("/todos/:id", async (req, res) => {
  const todoId = req.body;

  await Todo.findById(todoId);
  res.status(200).json({
    msg: "Got a single todo",
    todoId,
  });
});

app.listen(3000);
