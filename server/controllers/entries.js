const Entry = require('../models/Entry')
const User = require('../models/User')
const ash = require('express-async-handler')

const getAllEntries = ash( async(req, res) => {
    const allEntries = await Entry.find({})
    res.status(200).json({ allEntries })
})

const getEntry = ash( async(req, res) => {
    const {id} = req.params
    const entry = await Entry.findOne({_id:id})

    if(!entry){
        return res.status(404).json({message: `No entry with id: ${id}`})
    }

    res.status(200).json({ entry })
})

const createEntry = ash ( async(req, res) => {
    
    let data = {
        ...req.body,
        user: req.user.id
    }
    
    const entry = await Entry.create(data)
    res.status(201).json({ entry })
})

const updateEntry = ash( async(req, res) => {
    const {id} = req.params
    const entry = await Entry.findById(id)


    if(!entry){
        return res.status(404).json({message: `No entry with id: ${id}`})
    }

    const user = await User.findById(req.user.id)

    //validate user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    //check if goal user is the current user 
    if(entry.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    
    const update_entry = await Entry.findByIdAndUpdate({_id: id}, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({ update_entry })

})

const deleteEntry = ash( async(req, res) => {
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