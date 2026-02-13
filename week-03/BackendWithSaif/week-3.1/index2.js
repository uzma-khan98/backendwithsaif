import express from "express";
import zod from "zod";

const app = express();

// middleware
app.use(express.json());

// we will create its new npm package in later projects
const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(4),
});
app.get("/login", (req, res) => {
  // const { email, password } = req.body;
  //* without zod
  // if (typeof email === string && typeof password === string && password.length >= 6) {

  // }
  //* with zod
  const response = loginSchema.safeParse(req.body);

  console.log(response);

  if (response.success) {
    res.send("Login Successfully!");
  }
  res.send("Invalid inputs!");
});

app.listen(3000, () => {
  console.log("Our app installed Zod, is running on port 3000");
});
