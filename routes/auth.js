const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).send(`Sorry name not recognized`)
    }
    res.status(200).send(`Welcome ${name}`)
})

module.exports = router