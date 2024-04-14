const express = require('express');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://timmyjinks:Iamshort11@translations.htzswjn.mongodb.net/?retryWrites=true&w=majority&appName=translations";
const app = express();
const port = 8080;

app.listen(port);
app.use(express.static('frontend'))

app.get('/home', (req, res) => {
    console.log("connected");

    res.sendFile('index.html', {root: 'frontend'});
});
