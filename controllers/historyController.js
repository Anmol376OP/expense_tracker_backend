const mongoose = require('mongoose')
const io = require('socket.io')(8000)

const historyController = async (req, res) => {
    try {
        const userid = req.body.data._id
        const transactions = await mongoose.model('transactions').find({ userId: userid })

        res.status(200).json(transactions)
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }
}

module.exports = historyController