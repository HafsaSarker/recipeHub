const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        require: [true, 'please add a name']
    },
    email: {
        type: String,
        require: [true, 'please add an email'],
        unique: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', UserSchema)