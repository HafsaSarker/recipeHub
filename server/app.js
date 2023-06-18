const express = require('express')
const entries = require('./routes/entries')
const app = express()

//middleware
app.use(express.json())

//base route
app.use('/recipeHub/entries', entries)

const port = 3000

app.listen(port, () => console.log(`server is listening on port ${port}`))

