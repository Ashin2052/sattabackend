const express = require("express");
const mongoose = require("mongoose");
const bodyparsers = require("body-parser");
const routeManager = require("./routes");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;

const app = express();

require("dotenv").config({ path: "variables.env" });

const uri = "mongodb+srv://ashinmahat:myattitude@ashincluster-et3nk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
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

app.listen(process.env.PORT || 8080, () => console.log("server started"));
