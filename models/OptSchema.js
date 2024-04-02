const mongoose = require("mongoose")
const Schema = mongoose.Schema

const otpSChema = new Schema({
    otp:{
        type:String
    },
    email:{
        type:String
    },
    status:{
        type:Boolean
    },
    time: {
        type: Number,
        default: Date.now 
    }
})

module.exports = mongoose.model("opt",otpSChema)