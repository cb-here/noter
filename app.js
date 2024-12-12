const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const url = require('url');

// mongoose connection here
(async () => {
    try {
        mongoose.connect("mongodb+srv://cbv934:cbhere7524@cluster0.4hplb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
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