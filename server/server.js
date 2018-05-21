const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/..nodbapp/build'))

const gc = require(__dirname + '/controllers/gift_controllers')

const port = 3005;
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})

const giftsUrl='/api/gifts';
app.get(giftsUrl, gc.read);
app.post(giftsUrl, gc.create);
app.put(`${giftsUrl}/:id`, gc.update);
app.delete(`${giftsUrl}/:id`, gc.delete);