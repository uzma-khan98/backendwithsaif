import express from 'express';

const app = express();

function myMiddleware(req,res,next) {
  console.log("Middleware function is running!");
  next();
}

// middlewares
app.use(express.json())
app.use(myMiddleware());

app.get("/profile", (req, res) => {
  console.log("This is profile page.")
  res.send(
    "This is profile page"
  )
});
app.get("/about", (req, res) => {
  console.log("This is about page.")
  res.send(
    "This is about page"
  )
})

app.listen(3000, () => {
  console.log("App is running on port 3000");
})