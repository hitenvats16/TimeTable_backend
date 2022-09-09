const express = require('express');
const app = express();

const logic = require('./logic/TimeTableLogic')

const PORT_NUMBER = 2000;

app.use(require('cors')());
app.use(express.json());

// Routes
app.use('/', require('./routes/data-send'));
app.use('/', require('./routes/db-entry'));
app.use('/', require('./routes/logic'));

const server = app.listen(PORT_NUMBER, (err) => {
    if (err) {
        console.log('error occured ', err);
    } else {
        console.log('server running at port ', PORT_NUMBER);
    }
});