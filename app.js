const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const chatgpt = require('./routes/chatgpt')
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',chatgpt)
app.listen(4000)
