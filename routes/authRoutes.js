// const express = require('express')
// const authRouter = express()

// const {
//     registerUser,
//     authenticateUser
// } = require('../controller/controller')


// authRouter.post('/register', registerUser)
// authRouter.post('/login', authenticateUser)


// module.exports = authRouter




// const express = require('express')
// const authRouter = express.Router()
// const {
//     registerUser,
//     authenticateUser
// } = require('../controller/controller')



// authRouter.post('/register', registerUser)
// authRouter.post('/login', authenticateUser)

// module.exports = authRouter



const express = require('express')
const authRouter = express.Router()
const {
    registerUser,
    authenticateUser,
    getProtectedUsers
} = require('../controller/controller')
const authenticateToken = require('../middleware/authenticateToken')

authRouter.get('/protected_users', authenticateToken, getProtectedUsers)
authRouter.post('/register', registerUser)
authRouter.post('/login', authenticateUser)

module.exports = authRouter