const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("THIS IS THE HOMEPAGE");
})

app.post('/test', (req, res) => {
    console.log(req.body.email);

    res.send("OK");
})