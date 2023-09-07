require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./db/connection');
const users = require('./models/userSchema');
const cors = require('cors');
const router = require('./routes/router');


const PORT = 8000;

app.listen(PORT, ()=> {
    console.log("server has started on port : " + PORT);
})

app.use(cors());
app.use(express.json());
app.use(router);