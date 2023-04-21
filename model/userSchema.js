
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userModel = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})




// userModel.pre('save', async function(next)  {

//     if (this.isModified('password') || this.isNew) {
//         try {
//             const salt = await bcrypt.genSalt(10)
//             this.password = await bcrypt.hash(this.password, salt)
//         } catch (err) {
//             next(err)
//         }
//     } else {
//         next()
//     }
// })

// 



// userModel.pre('save', async function(next){
//     if(this.isModified || this.isNew) {
//         try{
//             const salt = await bcrypt.genSalt(10)
//             this.password = await bcrypt.hash(this.password, salt)
//         }catch(err){
//             next(err)
//         }
//     } else {
//         next()
//     }
// })





userModel.pre('save', async function(next){
    if(this.isModified || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10)
            this.password = await bcrypt.hash(this.password, salt)
        } catch(err) {
            next(err)
        }
    } else {
        next()
    }
})


























module.exports = mongoose.model('_USER', userModel)