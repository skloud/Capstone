const express = require("express");

// Require mongoose for
const mongoose = require("mongoose");
// Require dotenv to load environment variables
const dotenv = require("dotenv");
//Require models

dotenv.config();

// Initialize the Express application
const app = express();
//Get a port from .env - We use || to provide a default value
const PORT = process.env.PORT || 4040;

mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

//=======================
// HERE GOES MIDDLEWARE

//======================

const cors = (request, response, next) => {
  request.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  request.setHeader("Access-Control-Allow-Origin", "*");
  request.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  request.setHeader("Access-Control-Allow-Credentials", true);
  next(); // tell express to move to the next middleware function
};

//use the myMiddleware for every request to the app

//Logging all calls to our server

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

// tell the app to use the middleware
app.use(cors);
app.use(express.json());
app.use(logging);

// Request handlers go here

app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.route("/status").get((request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

app.post((request, response) => {
  response.json({ requestBody: request.body });
});

app.listen(4040, () => console.log("Listening on port 4040"));
