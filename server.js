const express = require("express");
const mongoose = require("mongoose");
const bodyparsers = require("body-parser");
const routeManager = require("./routes");
const cors = require("cors");

const app = express();

require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.URL || 8080, { useNewUrlParser: true });
mongoose.connection.on("connected", () =>
  console.log("mongodb connected successfully.")
);
mongoose.connection.on("error", error => console.log("connection failed."));

app.use(
  bodyparsers.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(bodyparsers.json({}));
app.use("/", routeManager);
// app.use('',express.static(__dirname + '/crud/'));
app.use('', express.static(__dirname + '/sattaking/'));

app.listen(process.env.PORT, () => console.log("server started"));
