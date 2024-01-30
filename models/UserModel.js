const mongoose = require('mongoose');
const Schema = mongoose.Schema; //class

const UserSchema = new Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    age:{
        type: Number,
    },
    isActive:{
        type: Boolean,
        default: false
    }
})

//model...
module.exports = mongoose.model('User', UserSchema);