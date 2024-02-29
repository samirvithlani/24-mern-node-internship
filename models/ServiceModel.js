const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({

    name:{
        type: String,
    },
    description:{
        type: String,
    },
    imageUrl :{
        type: String,
    }

})
module.exports = mongoose.model('Service', ServiceSchema);