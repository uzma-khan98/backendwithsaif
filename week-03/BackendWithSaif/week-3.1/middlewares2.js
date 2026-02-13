import express from 'express';

const app = express();


// middlewares
app.use(express.json());
app.use(authenticationCheck);

function authenticationCheck(req, res, next) {
  const token = req.header["authorization"];
  console.log(token);
  console.log("I will give authentication to users.");
  next();  //means go ahead
}

app.get('/login', (req, res) => {
  console.log("I am loggedIn!")
  res.send("I am loggedin for homepage")
})
app.get('/dashboard', (req, res) => {
  console.log("I am loggedIn-dashboard!")
  res.send("I am loggedin for Dashboard")
})

app.listen(3000, () => {
  console.log("My Server is running on port 3000")
})