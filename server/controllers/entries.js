const getAllEntries = (req, res) => {
    res.send('All entries')
}

const getEntry = (req, res) => {
    res.send('single entry')
}

const createEntry = (req, res) => {
    res.json(req.body)
}

const updateEntry = (req, res) => {
    res.send('update entry')
}

const deleteEntry = (req, res) => {
    res.send('delete an entry')
}

module.exports = {
    getAllEntries, 
    getEntry,
    createEntry,
    updateEntry,
    deleteEntry
}