const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/..nodbapp/build'))
const gc = require(__dirname + '/controllers/gift_controllers')

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})