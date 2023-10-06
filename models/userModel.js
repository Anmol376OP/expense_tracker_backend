const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, 'name is required'] },
        email: { type: String, required: [true, 'email is required and must be unique'] },
        password: { type: String, required: [true, 'password is required'] },
    },
    { timestamps: true },
    { collection: 'users', database: 'expense_tracker' }
)

const userModel = mongoose.model('users', UserSchema)
module.exports = userModel