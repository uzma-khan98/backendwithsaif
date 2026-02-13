import express from "express";

const app = express();

// middlewares
app.use(express.json());
app.use(authenticationCheck);

// to avoid this repitition of code for token, we set a middleware function of authenticationCheck and apply that middleware to all routes.

function authenticationCheck(req, res, next) {
  const token = req.headers["authorization"];
  console.log(token);

  if (!token) {
    res.json({ msg: "Provide the token" });
  }
  next();
}

app.post("/login", (req, res) => {
  let data = req.body;
  console.log(data);
  res.status(200).json({
    token: "123456why",
    data,
  });
});

// route to profile
app.get("/profile", (req, res) => {
  res.status(200).json({
    user: {
      username: "Uzmakh",
      email: "yousay@gmail.com",
      name: "Uzma Khan",
    },
  });
});

// route to dashboard
app.get("/dashboard", (req, res) => {
  res.send("Hello Dashboard");
});

// to avoid this repitition of code for token, we set a middleware function of authenticationCheck and apply that middleware to all routes, app.use(authenticationCheck);

// introducing error handling middleware- (global catches)
// function defined anywhere in the code above with other middleware functions and use it just above the listening port lines - at the end of the other code
function errorHandlingMiddleware(err, req, res, next) {
  if (err) {
    res.status(500).json({
      msg: "Something went wrong!",
    });
  }
}

app.use(errorHandlingMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
