const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {});

app.get("/getNumber", (req, res) => {
  res.send("Phone number: 8380860010");
});

app.get("/getName", login, (req, res) => {
  res.send("Name: Aaditya Sudhir Joshi");
});

function login(req, res, next) {
  const authpresent = req.headers["auth"];
  if (authpresent) {
    console.log("Auth and it's value is present in request header");
    next();
  } else {
    console.log("Auth header is absent");
    res.status(401).json({
      Errorcode: "401 - Unauthorized access",
      Errormessage: "Login to access the requested resource",
    });
  }
}

app.listen(5000, () => console.log("Server started on port 5000"));
