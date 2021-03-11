import {sms} from './TEST.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require("express");
const app = express();

app.use('/',function (request, response) {
    response.send(`<!DOCTYPE html>
  <html>
  <input type="button" onclick="sms()" value="Отправить сообщение!">
  <html>`);
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
