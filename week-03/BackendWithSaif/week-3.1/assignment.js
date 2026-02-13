// @Week 3.1 | Middlewares And Global Catches, Zod 

//? 1. Count the number of requests(middleware Assignments)
//? 2. Find the average time your server is taking to handle requests (middleware Assignments)

import express from 'express';

const app = express();
// middleware
app.use(express.json());

let noOfRequests = 0;
let totalResponseTime = 0;

function calculateNoOfRequestsAndResponseTime(req, res, next) {
  noOfRequests++;
  const startTime = Date.now();

  res.on("finish", () => {
    const endTime = Date.now();

    const responseTime = endTime - startTime;
    totalResponseTime += responseTime;
  })
  next();
}

// using this middleware function in get route,
app.get("/", calculateNoOfRequestsAndResponseTime, (req, res) => {
  res.status(200).send({
    "Total Requests": noOfRequests,
    "Average Response Time": totalResponseTime,
  })
})
app.listen(3000, ()=> {
  console.log("Assignment server is running ")
})