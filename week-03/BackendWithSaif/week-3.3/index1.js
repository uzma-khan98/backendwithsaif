import express from "express";
import jwt from "jsonwebtoken";

const app = express();

//* middleware
app.use(express.json());

const My_SECRET_KEY = "123ABCD";

//* Routes
app.post("/signup", (req, res) => {
  const { email, password, name, age } = req.body;

  //* token generation
  let token = jwt.sign({ email, name, age }, My_SECRET_KEY);

  res.json({ token });
});

//* route to profile, after getting token
app.get("/profile", (req, res) => {
  const token = req.headers["authorization"];

  console.log(token)

  if (!token) {
    res.json({
      msg:"Please login first!"
    })
  };

  //* to get verified user-data,
  const data = jwt.verify(token, My_SECRET_KEY);

  res.json({
    data,
    msg:"User logged in successfully!"
  })
})

app.listen(3000, () => {
  console.log("JWT-server is running on 3000");
});
