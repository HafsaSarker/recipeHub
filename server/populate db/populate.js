require('dotenv').config()

const connectDB = require('../db/connect')
const Entries = require('../models/Entry')

const json = require('./entries.json')

const populateDB = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Entries.deleteMany()
        await Entries.create(json)

        console.log('All products inserted. Exiting...')

        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

//populateDB()