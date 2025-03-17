const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const studentRoutes = require("./routes/studentroutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", studentRoutes);

app.listen(5002, () => {
    console.log("Server running on port 5002");
});

