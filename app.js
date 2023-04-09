const express = require('express')
const app = express()

const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')

// run static file
app.use(express.static('./src'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)

app.listen(5005, () => {
    console.log('server on');
})