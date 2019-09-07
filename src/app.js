const express = require('express');
require('./db/objection.js');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const userRouter = require('./routers/userRouter');
const noteRouter = require('./routers/noteRouter');

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(userRouter);
app.use(noteRouter);

app.get('/', (req, res) => {
    res.send('it works!')
});

module.exports = app;
