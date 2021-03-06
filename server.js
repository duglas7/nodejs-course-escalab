const express = require("express");
const connectDB = require("./database");
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync } = require("fs");

require("dotenv").config();

const app = express();

// db-connection
connectDB();

// middlewares-server
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const port = process.env.PORT || 8000;

// listen
app.listen(port, () => console.log(`Server is running on port ${port}`));
