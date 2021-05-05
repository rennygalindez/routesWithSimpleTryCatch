const express = require('express');
const app = express();
const exampleRoute = require('./routes/example.js');
const users = require('./routes/users.js');


const errorHandler = require('./error');

app.use(express.urlencoded());
app.use(express.json());
app.use();
app.use('/example', exampleRoute);
app.use('/users', users);

app.use(errorHandler);

app.listen(3001, () => console.log('running...'));
