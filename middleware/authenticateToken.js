const jwt = require('jsonwebtoken')


async function authenticateToken(req, res, next) {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ msg: 'No Token Provided' })
    }



    jwt.verify(token, 'secret', (err, user) => {
        if (err) {
            return res.status(403).json({ msg: 'Invalid or expired token', err })
        }

        req.user = user
        next()
    })

}

module.exports = authenticateToken