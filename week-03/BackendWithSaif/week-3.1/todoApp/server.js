import express from "express";
// import zod from "zod";

const app = express();
//* middlewares
app.use(express.json());

//* schema with zod
// const todosSchema = zod.object({
//   text: zod.string().min(1, "Todo text cannot be empty"),
// });
//* todos-data  (there's an object in an array)
let ALL_TODOS = [
  {
    text: "Morning walk",
    completed: false,
    id: 1,
  },
  {
    text: "Doing breakfast",
    completed: false,
    id: 2,
  },
];

// * Error-handling middleware
function errorHandlingMiddleware(err, req, res, next) {
  if (err) {
    res.status(500).json({
      msg: "Something went wrong!",
    });
  }
  next()
}

//* Creating API routes for CRUD
//* to post(create) a todo
app.post("/todo", (req, res) => {
  const text = req.body;
  // using zod,
  // const response = todosSchema.safeParse(req.body);

  if (!text) {
    res.status(400).json({
      msg: "Todo text is required.",
    });
  }

  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
  };

  ALL_TODOS.push(newTodo);

  res.status(200).json({
    msg: "Todo created successfully",
    todos: ALL_TODOS,
  });
});

//* to get all todos
app.get("/todos", (req, res) => {
  res.status(200).json({
    todos: ALL_TODOS,
  });
});

// * to get a single todo
app.get("/todo/:id", (req, res) => {
  const todoId = req.params.id;
  if (!todoId) {
    res.status(400).json({
      msg: "Todo id is required.",
    });
  }
  ALL_TODOS.forEach((singleTodo) => {
    if (singleTodo.id == todoId) {
      return res.status(200).json({
        singleTodo,
      });
    }
  });
});
// * to update a todo
app.put("/todo/:id", (req, res) => {
  const todoId = req.params.id;
  if (!todoId) {
    res.status(400).json({
      msg: "Todo id is required",
    });
  }
  ALL_TODOS.forEach((singleTodo) => {
    if (singleTodo.id == todoId) {
      singleTodo.completed = true;
    }
    res.status(200).json({
      singleTodo,
    });
  });
});

// * to delete a todo
app.delete("/todo/:id", (req, res) => {
  const todoId = req.params.id;
  if (!todoId) {
    res.json({
      msg: "Todo id is required",
    });
  }
  ALL_TODOS = ALL_TODOS.filter((singleTodo) => {
    return singleTodo.id !== todoId;
  });
});

app.use(errorHandlingMiddleware);

app.listen(3000, () => {
  console.log("I am todo app server, running on port 3000");
});
