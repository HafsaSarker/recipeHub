const Entry = require('../models/Entry')
const asyncWrapper = require('../middleware/async')

const getAllEntries = asyncWrapper( async(req, res) => {
    const allEntries = await Entry.find({})
    res.status(200).json({ allEntries })
})

const getEntry = asyncWrapper( async(req, res) => {
    const {id} = req.params
    const entry = await Entry.findOne({_id:id})

    if(!entry){
        return res.status(404).json({message: `No entry with id: ${id}`})
    }

    res.status(200).json({ entry })
})

const createEntry = asyncWrapper ( async(req, res) => {
    const entry = await Entry.create(req.body)
    res.status(201).json({ entry })
})

const updateEntry = asyncWrapper( async(req, res) => {
    const {id} = req.params
    const entry = await Entry.findByIdAndUpdate({_id: id}, req.body, {
        new: true,
        runValidators: true
    })

    if(!entry){
        return res.status(404).json({message: `No entry with id: ${id}`})
    }

    res.status(200).json({ entry })

})

const deleteEntry = asyncWrapper( async(req, res) => {
    const {id} = req.params
    const entry = await Entry.findOneAndDelete({_id:id})

    if(!entry){
        return res.status(404).json({message: `No entry with id: ${id}`})
    }

    res.status(200).json({ success: 'true' })
})

module.exports = {
    getAllEntries, 
    getEntry,
    createEntry,
    updateEntry,
    deleteEntry
}