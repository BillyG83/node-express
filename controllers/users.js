const { users } = require('../data')

const getAllUsers = (req, res) => {
    res.status(200).json({ success: true, data: users})
}

const addNewUser = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).send(`Sorry name not recognized`)
    }
    const newUser = {
        name: name,
        job: 'newbe',
        id: Number(users.length + 1),
        isDude: (Math.random() < 0.5)
    }
    res.status(200).send({ success: true, data: [...users, newUser,]})
}

const editUser = (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = users.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(400).send(`Sorry no person with ID: ${id}`)
    }
    const usersWithUserNameUpdated = users.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: usersWithUserNameUpdated})
}

const deleteUser = (req, res) => {
    const { id } = req.params
    const person = users.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(400).send(`Sorry no person with ID: ${id}`)
    }
    const usersFiltered = users.filter((person) => person.id !== Number(id))
    res.status(200).json({ success: true, data: usersFiltered})
}

module.exports = {
    addNewUser,
    deleteUser,
    editUser,
    getAllUsers,
}