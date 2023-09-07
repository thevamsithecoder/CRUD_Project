const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    Name : {
        type: String,
        required :true
    },
    Email : {
        type : String,
        required :true,
        unique : true
    },
    Age : {
        type : Number,
        required :true,
    },
    Mobile : {
        type : Number,
        required : true
    },
    Work : {
        type : String,
        required : true
    },
    Address : {
        type :String,
        required : true
    },
    Description : {
        type : String,
        required : true
    }
})


const users = new mongoose.model("users", userSchema);


module.exports = users;