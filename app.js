const express = require('express');
const fs = require('fs')
const path = require('path')
const app = express();

const logic = require('./logic/TimeTableLogic')
const https = require('https');
const options = {
    key: fs.readFileSync(path.join(__dirname,'certificates','key.pem')),
    cert: fs.readFileSync(path.join(__dirname,'certificates','cert.pem')),
};


const PORT_NUMBER = 443;

app.use(require('cors')());
app.use(express.json());

// Routes
app.use('/', require('./routes/data-send'));
app.use('/', require('./routes/db-entry'));
app.use('/', require('./routes/logic'));

const httpsServer = https.createServer(options,app)

httpsServer.listen(PORT_NUMBER, (err) => {
    if (err) {
        console.log('error occured ', err);
    } else {
        console.log('server running at port ', PORT_NUMBER);
    }
});
