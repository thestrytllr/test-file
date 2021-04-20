const express = require("express");
const StudentSchema = require('./StudentSchema')
const app = express();
app.use(express.json())
// app.use(cors())
const router = express.Router();
// var MongoClient= require('mongodb').MongoClient;
// var url='mongodb://localhost:27017/student';
// Using Node.js `require()`
const mongoose = require('mongoose');
const homeRouter = require('./home')
mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(data => {
    console.log("Connected mongo")
    // console.log(data)
});

app.use('/',homeRouter)
app.listen(3000, function () { console.log('exmp app listening on port 3000'); });
