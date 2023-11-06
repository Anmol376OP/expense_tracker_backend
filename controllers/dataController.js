const mongoose = require('mongoose')

const dataController = async (req, res) => {
    try {
        const id = req.body._id
        const type = req.body.type
        try {
            const transactions = await mongoose.model('transactions').find({
                userId: id,
                category: 'Expenditure',
                type: type
            })
            res.status(200).json(transactions)
        } catch (e) {
            console.log(e)
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }
}

module.exports = dataController