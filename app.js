const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const chatgpt = require('./routes/chatgpt')
const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000','http://localhost:5013','http://127.0.0.1:5013','https://mu6xge.csb.app'],
};
app.use(cors());
// It parse body of each request
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',chatgpt)
app.listen(4000)
