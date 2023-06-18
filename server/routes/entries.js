const express = require('express')
const router = express.Router()
const {     
    getAllEntries, 
    getEntry,
    createEntry,
    updateEntry,
    deleteEntry
} = require('../controllers/entries')

//get all entries
router.route('/').get(getAllEntries)

//get a single entry
router.route('/:id').get(getEntry)

//create an entry
router.route('/create').post(createEntry)

//edit an entry
router.route('/:id').patch(updateEntry)

//delete an entry
router.route('/:id').delete(deleteEntry)

module.exports = router