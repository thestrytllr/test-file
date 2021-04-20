const { Int32 } = require("bson");
const mongoose = require("mongoose");

//const objectid = schema.objectid;
const student = new mongoose.Schema({
    name: String,
    rollno: Number,
    age: Number
});

module.exports = mongoose.model('Student', student, 'student')
