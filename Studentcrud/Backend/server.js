const express = require("express");
const db = require("./db");
const studentRoutes = require("./routes/studentroutes");

const app = express();
app.use(express.json());

app.use("/api", studentRoutes);

app.listen(5002, () => {
    console.log("Server running on port 5002");
});
