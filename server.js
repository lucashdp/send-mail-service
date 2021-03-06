// server.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
app.listen(port, () => {
    console.log('We are live on ' + port);
});