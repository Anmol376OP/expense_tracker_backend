const userModel = require('../models/userModel')

const registerController = async (req, res) => {
    try {
        const newUser = new userModel(req.body)
        console.log(newUser)
        await newUser.save()
        res.status(201).json({
            success: true,
            newUser
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }
}

module.exports = registerController
