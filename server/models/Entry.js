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
    }
})

module.exports = mongoose.model('Entries', EntrySchema)