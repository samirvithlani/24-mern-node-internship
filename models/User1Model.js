const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user1Schema = new Schema({
    name: {
        type: String,
    },
    role:{
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }
})