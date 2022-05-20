// Packages

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routers = require("./routes/index.js");
const databaseConnect = require("./helpers/database/databaseConnect.js");
const customErrorHandler = require("./middlewares/customErrorHandler.js");
const path = require("path");
const app = express();

// .env configuration

dotenv.config({
    path: "./env/config.env"
});

// express.json() middleware

app.use(express.json());

// Database Connect

databaseConnect();

// Port

const PORT = 3000 || process.env.PORT;

// "/api" routes

app.use('/api', routers);

// Custom Error Handler

app.use(customErrorHandler);

// Static Files

app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}..`);
});
