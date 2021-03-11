import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import {sms} from './TEST.js';


const express = require("express");
const app = express();

app.use('/',function (request, response) {
    response.send(`<!DOCTYPE html>
  <html>
  <button onclick='sms()' >TestSMS</button>
  <html>`);
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
