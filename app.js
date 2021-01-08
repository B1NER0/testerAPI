const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser())
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("THIS IS THE HOMEPAGE");
})

app.post('/test', (req, res) => {
    console.log(req.body);

    res.send("OK");
})

app.listen(PORT, () => {
    console.log("Server is listening on PORT " + PORT);
})