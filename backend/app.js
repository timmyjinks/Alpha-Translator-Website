const express = require('express');
const app = express();
const port = 8080;

app.listen(port);
app.use(express.static('frontend'))

app.get('/home', (req, res) => {
    console.log("connected");

    res.sendFile('index.html', {root: 'frontend'});
});
