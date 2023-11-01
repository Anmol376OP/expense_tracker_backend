const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema(
    {
        userId: { type: String },
        username: { type: String },
        amount: { type: Number },
        description: { type: String },
        type: { type: String },
        category: { type: String },
        date: { type: String }
    },
    { timestamps: true },
    { collection: 'transactions', database: 'expense_tracker' }
)

const TransactionModel = mongoose.model('transactions', TransactionSchema)
module.exports = TransactionModel