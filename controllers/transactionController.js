const TransactionModel = require('../models/transactionModel')

const transactionController = (req, res) => {
    try {

    }
    catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }
}

module.exports = transactionController