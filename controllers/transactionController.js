const TransactionModel = require('../models/transactionModel')

const transactionController = async (req, res) => {
    try {
        const newTransaction = new TransactionModel(req.body)
        await newTransaction.save()
        res.status(201).json({
            success: true,
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }
}

module.exports = transactionController