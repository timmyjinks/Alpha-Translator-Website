const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Translation = require('../models/translation');

const uri = "mongodb+srv://timmy:tkiHiDiCte4YgUsQ@translations.xxavhvt.mongodb.net/translations?retryWrites=true&w=majority&appName=translations";
const port = 8080;

mongoose.connect(uri)
.then(async () => {  
    console.log('database connected');
    const translations = await Translation.find();

    app.use(express.static('frontend'));
    app.listen(port, (err) => {
        if (!err) {
            console.log(`ip address: 127.0.0.1:${port}`);
        } else {
            console.log(err);
        }
    });

    app.get("/translations", (req, res) => {
        res.send(translations);
    });

})
.catch((err) => console.log("Error connecting to database: " + err));