const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    name:{
        type : String,
        required: [true, 'A tour must have a name'],
        unique : true
    },
    price:{
        type: Number,
        required :[true, 'A tour must have price']
    },
    location: String,
    locationType: String,
    country: String,
    days: Number,
    description: String,
    rating:Number

})

const Tour = mongoose.model('Tour', tourSchema);


module.exports = Tour