const express = require('express')
const router = express.Router()
const {     
    getAllEntries, 
    getEntry,
    createEntry,
    updateEntry,
    deleteEntry
} = require('../controllers/entries')
const protect = require('../middleware/auth')

//get all entries
router.route('/').get(protect, getAllEntries)

//get a single entry
router.route('/:id').get(protect, getEntry)

//create an entry
router.route('/create').post(protect, createEntry)

//edit an entry
router.route('/:id').patch(protect, updateEntry)

//delete an entry
router.route('/:id').delete(protect, deleteEntry)

module.exports = router