import express from "express";
import zod from "zod";

const app = express();
//* middlewares
app.use(express.json());

//* schema with zod
const todosSchema = zod.object({
  text: zod.string().trim().min(3, "Todo text cannot be empty"),
});
//* schema for todo ID validation
const todoIdSchema = zod.object({
  id: zod.string().transform(Number).pipe(zod.number().int().positive())
});

//* schema for updating todo (optional fields)
const updateTodoSchema = zod.object({
  text: zod.string().min(1, "Todo text cannot be empty").optional(),
  completed: zod.boolean().optional(),
}).refine(data => data.text !== undefined || data.completed !== undefined, {
  message: "At least one field (text or completed) must be provided for update"
});


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
  next();
}

//* Creating API routes for CRUD
//* to post(create) a todo
app.post("/todo", (req, res) => {
  // const text = req.body; //without zod
  // using zod,
  const response = todosSchema.safeParse(req.body);

  if (!response.success) {
    res.status(400).json({
      msg: "Todo text is required.",
      errors: response.error.errors,
    });
  }

  const newTodo = {
    id: Date.now(),
    text: response.data.text,
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
  // const todoId = req.params.id;
  // Validate the ID parameter
  const idValidation = todoIdSchema.safeParse({ id: req.params.id });
  // if (!todoId) without zod
  if (!idValidation.success) {
    res.status(400).json({
      // msg: "Todo id is required.",
      msg: "Invalid todo ID format",
      errors: idValidation.error.errors,
    });
  }

  const todoId = idValidation.data.id;  // Use validated ID
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
  // const todoId = req.params.id;
  // Validate the ID parameter
  const idValidation = todoIdSchema.safeParse({ id: req.params.id });
  // if (!todoId)
  if (!idValidation.success) {
    res.status(400).json({
      // msg: "Todo id is required",
      msg: "Invalid todo ID format",
      errors: idValidation.error.errors,
    });
  }

  // Validate the update data
  const updateValidation = updateTodoSchema.safeParse(req.body);

  if (!updateValidation.success) {
    return res.status(400).json({
      msg: "Invalid update data",
      errors: updateValidation.error.errors,
    });
  }

  const todoId = idValidation.data.id;  // Use validated ID
  // ALL_TODOS.forEach((singleTodo) => {
  //   if (singleTodo.id == todoId) {
  //     singleTodo.completed = true;
  //   }
  const todoIndex = ALL_TODOS.findIndex((singleTodo) => singleTodo.id === todoId);
   
  // Update the todo with the validated data
  ALL_TODOS[todoIndex] = {
    ...ALL_TODOS[todoIndex],
    ...updateValidation.data
  };
  res.status(200).json({
    msg: "Todo updated successfully",
    todo: ALL_TODOS[todoIndex],
  });
  });

// * to delete a todo
app.delete("/todo/:id", (req, res) => {
  // const todoId = req.params.id;
  // Validate the ID parameter
  const idValidation = todoIdSchema.safeParse({ id: req.params.id });
  // if (!todoId)
  if (!idValidation.success) {
    res.status(400).json({
      // msg: "Todo id is required",
      msg: "Invalid todo ID format",
      errors: idValidation.error.errors,
    });
  }

  // Use the validated ID from idValidation.data.id
  const todoId = idValidation.data.id;  // This is already converted to a number
  ALL_TODOS = ALL_TODOS.filter((singleTodo) => {
    return singleTodo.id !== todoId;
  });
  res.status(200).json({
    msg: "Todo deleted successfully",
    todos: ALL_TODOS,
  });
});


app.use(errorHandlingMiddleware);

app.listen(3000, () => {
  console.log("I am todo app server, running on port 3000");
});
