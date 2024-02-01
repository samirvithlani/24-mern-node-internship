const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
    },
    password:{
        type:String,
        required:true
    },
    salary :{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model("employees",employeeSchema)