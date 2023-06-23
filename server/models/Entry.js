const mongoose = require('mongoose')

const EntrySchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Please provide recipe name'],
        trim: true,
    },
    imgUrl: {
        type: String,
        required: [true, 'Please provide recipe image url'],
        trim: true,
    },
    recipeLink: {
        type: String,
        required: [true, 'Please provide recipe link'],
        trim: true,
    },
    cuisine: {
        type: String,
        enum: {
            values: ['indian', 'italien', 'thai', 'chinese', 'japanese', 'korean', 'french', 'turkish'],
            message: '{VALUE} is not supported'
        },
        required: [true, 'Please provide country'],
        trim: true,
    },
    TotTime: {
        type: String,
        required: [true, 'Please provide the total time needed'],
        trim: true,
    },
    servings: {
        type: Number
    },
    rating: {
        type: Number,
        default: 4.5
    }
})

module.exports = mongoose.model('Entries', EntrySchema)