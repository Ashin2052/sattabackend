const express = require("express");
const mongoose = require("mongoose");
const bodyparsers = require("body-parser");
const routeManager = require("./routes");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;

const app = express();

require("dotenv").config({ path: "variables.env" });
const dbCon="mongodb+srv://mahatashin:barcelona@cluster0-ykjjj.mongodb.net/sattaKing?retryWrites=true&w=majority";
// const uri = "mongodb+srv://ashinmahat:myattitude@ashincluster-et3nk.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbCon, { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.on("connected", () =>
  console.log("mongodb connected successfully.")
);
mongoose.connection.on("error", error => console.log("connection failed."));
app.use(cors());

app.use(
  bodyparsers.urlencoded({
    extended: true
  })
);
app.use(bodyparsers.json({}));
app.use("/", routeManager);
// app.use('',express.static(__dirname + '/crud/'));
app.use('', express.static(__dirname + '/sattaking/'));
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, '/sattaKing/', 'index.html'));
});
app.listen(process.env.PORT || 8080 , () => console.log("server started"));
