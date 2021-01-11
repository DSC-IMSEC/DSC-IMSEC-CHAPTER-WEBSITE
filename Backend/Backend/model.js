const mongoose = require("mongoose")
const validator = require("validator")

const register = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
});


const Model = new mongoose.model("Register", register);

module.exports = Model;