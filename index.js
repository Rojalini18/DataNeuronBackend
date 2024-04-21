const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/TaskRoute")

const cors = require("cors");
const punycode = require('punycode/');

const app = express();
const PORT = process.env.PORT | 4000;


app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected..."))
.catch((err) => console.log(err))

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listen at port ${PORT}`));
