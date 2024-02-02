const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    name:{
        type: String,
    },
    price:{
        type: Number,
    },
    qty:{
        type: Number,
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    status:{
        type: Boolean,
        default: true
    }

})

module.exports = mongoose.model('Product', ProductSchema);