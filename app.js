const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();

// mongoose connection here
const dbURI = process.env.MONGO_URI;
(async () => {
    try {
        mongoose.connect(dbURI);
        console.log("Connection established");
    } catch(error) {
        console.log("Error: " + error);
    }
})();

const app = express();
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// routes

app.use('/', require('./routes/notes.route'));


const PORT = 8082;

app.listen(PORT, () => {
    console.log("Server is running at 8081");
})