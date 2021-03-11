import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import {sms} from './TEST.js';
sms();

const express = require("express");
const app = express();

app.get('/', function(request, response) {
    response.send('Hello World!');
});


const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});