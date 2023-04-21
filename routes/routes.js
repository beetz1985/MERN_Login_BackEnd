const express = require('express')
const router = express.Router()
const {
    getAll,
    deleteItem
} = require('../controller/controller')

router.get('/', getAll)
router.delete('/:id', deleteItem)

module.exports = router