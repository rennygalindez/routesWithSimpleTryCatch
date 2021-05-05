const express = require('express');
const app = express();
const exampleRoute = require('./routes.js');
const errorHandler = require('./error');

app.use('/example', exampleRoute);


app.use(errorHandler);

app.listen(3001, () => console.log('running...'));
