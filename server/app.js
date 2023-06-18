const express = require('express')
const app = express()
const entries = require('./routes/entries')
const connectDB = require('./db/connect')
require('dotenv').config()


//middleware
app.use(express.json())

//base route
app.use('/recipeHub/entries', entries)

const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()

