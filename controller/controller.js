const _USER = require('../model/userSchema')
const wrapper = require('../middleware/asyncWrapper')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')




const getAll = wrapper(async (req, res) => {
    const result = await _USER.find({})
    res.status(200).json(result)
})



const getProtectedUsers = wrapper(async (req, res) => {
    const result = await _USER.find({})
    res.status(200).json(result)
})


const deleteItem = wrapper(async (req, res) => {
    const { id } = req.params
    const result = await _USER.findOneAndDelete({ _id: id })
    res.status(200).json(result)
})



const registerUser = async (req, res) => {
    const { email, password } = req.body

    const emailExists = await _USER.findOne({ email })
    if (emailExists) {
        return res.status(409).json({ msg: "User Already Exists" })
    }

    const newUser = await _USER.create({ email, password })
    const token = jwt.sign(
        { id: newUser._id },
        'secret',
        { expiresIn: '1h' }
    )

    res.status(201).json(token)

}


const authenticateUser = async (req, res) => {
    const { email, password } = req.body

    try {

        const user = await _USER.findOne({ email })
        if (!user) {
            return res.status(401).json({ msg: "User Does Not Exist" })
        }


        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ msg: "Password Is Not Recognised" })
        }

        const token = jwt.sign(
            { id: user._id },
            'secret',
            { expiresIn: '1h' }
        )

        res.status(201).json(token)
    } catch (err) {
        res.status(401).json({ msg: "Failed To Authenticate User", err })
    }
    const user = await _USER.findOne({ email })


}


module.exports = {
    getAll,
    getProtectedUsers,
    deleteItem,
    registerUser,
    authenticateUser
}