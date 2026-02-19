import express from "express";

// to give our app the power of express
const app = express();

// using middleware, to parse json data/body
app.use(express.json());




// data for getting object
let user = {
  username: "saif72437",
  password: "123456",
  name: "Saifullah Khan",
  age: 21,
  gender: "male",
};
// data for using with params
const ALL_VIDEOS = [
  {
    id: 123,
    title: "India vs Pakistan",
  },
  {
    id: 100,
    title: "chai aur code",
  },
];

// data for using with query-params
const CITIES_WEATHER = [
  {
    city: "isb",
    temp: 22,
  },
  {
    city: "lhr",
    temp: 24,
  },
  {
    city: "mltn",
    temp: 29,
  },
];

// making APIs-end points
// app.get("/", (req, res) => {
//   res.send("It is homepage.");
// });
// app.get("/user/profile", (req, res) => {
//   return res.json({ user });
// });
app.get("/about", (req, res) => {
  res.send("<h1>User is here</h1>");
});

// Methods of taking inputs
// 1-taking user-input using body
// using post method
app.post("/user/login", (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  if (!email || !password) {
    return res.status(404).json({
      msg:"Email and Password are required."
    })
  }

  res.status(200).json({
    msg: "Saved data",
    name: name,
    email: email,
    password: password,
  });
});
app.get("/users", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  res.status(200).json({
    msg: "Got data",

    email: email,
    password: password,
  });
});

// 2-take input using Headers
app.get("/user/profile", (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    res.status(404).send("I don't find the token");
  }
  console.log(token);

  res.status(200).json({ msg: "I got the token, Here is your profile page" });
});

//3- to take input using params
app.get("/video/:id", (req, res) => {
  const videoId = req.params.id;

  if (!videoId) {
    res.status(404).json({
      msg: "Video id is required",
    });
  }

  ALL_VIDEOS.forEach((singleVideo) => {
    if (singleVideo.id == videoId) {
      return res.status(200).json({
        msg: "Here is your video",
        singleVideo,
      });
    }
    console.log("Searching for video ID:", videoId);

    res.status(404).json({
      msg: "Video not found",
    });
  });
});

//4- to take input using query-params
app.get("/api/weather", (req, res) => {
  const cityName = req.query.city;
  // http://localhost:3000/api/weather?city=lhr
  if (!cityName) {
    res.status(404).json({ msg: "City name is required." });
  }

  CITIES_WEATHER.forEach((singleCity) => {
    if (singleCity.city == cityName) {
      res.status(200).json({
        singleCity,
      });
    }
  });
  console.log(cityName);

  res.status(404).json({
    msg: "We don't have this city record here.",
  });
});


// to instruct the server to listen the port
app.listen(3000, () => {
  console.log("Our app is running on port 3000");
});
