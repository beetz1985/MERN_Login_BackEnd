const mongoose = require('mongoose')



function connectDB() {
    const connectionString = 'mongodb+srv://ben_1234:password_1234@cluster0.etpv8mb.mongodb.net/users'
    mongoose.connect(connectionString)    
}

/*

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
*/



module.exports = connectDB