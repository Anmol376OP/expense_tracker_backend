const userModel = require('../models/userModel')

const loginController = async (req, res) => {
    try {
        const { name, password } = req.body
        const user = await userModel.findOne({ name, password })
        if (!user) {
            return res.status(404).send('User Not Found')
        }
        res.status(200).json({
            success: true,
            user
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }
}

module.exports = loginController