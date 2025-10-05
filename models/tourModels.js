const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    ratingsAverage: {
        type : Number,
        default : 0
    },
    ratingsQuantity: {
        type: Number,
        default : 0
    },
    images: [String],
    startDates: [Date],
    name: {
        type: String,
        unique: true,
        required: [true, 'A tour must has a name'],
        trim : true
    },
    duration: {
        type: Number,
        required: [true, 'A tour must has a duration']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must has a max group size']
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must has a difficulty']
    },
    guides: [String],
    price: {
        type: Number,
        required: [true, 'A tour must has a price']
    },
    summary: {
        type: String,
        required: [true, 'A tour must has a summary'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'A tour must has a description'],
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, 'A tour must has a image cover'],
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        select : false
    }
})

const Tour = mongoose.model('Tour', tourSchema);


module.exports = Tour