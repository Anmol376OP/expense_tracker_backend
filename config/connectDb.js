const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MongoURL)
        console.log(`Server running on ${mongoose.connection.host}`)
    } catch (err) {
        console.log(err)
    }
}
module.exports = connectDb