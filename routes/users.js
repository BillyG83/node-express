const express = require('express')
const router = express.Router()

const {
    addNewUser,
    deleteUser,
    editUser,
    getAllUsers,
} = require('../controllers/users')


// get all
router.get('/', getAllUsers)

// add new
router.post('/', addNewUser)

// edit user
router.put('/:id', editUser)

// delete user
router.delete('/:id', deleteUser)

module.exports = router