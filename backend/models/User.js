const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type :String,
        required : true,
        minlength: 6,
        maxlength: 40,
        unique:true
    },
    email: {
        type :String,
        required : true,
        minlength: 6,
        maxlength: 40,
        unique:true
    },
    password: {
        type :String,
        required : true,
        minlength: 6,
    },
    isadmin: {
        type :Boolean,
        default:false,
    },
},{timestamps:true});

module.exports = mongoose.model("User",userSchema);