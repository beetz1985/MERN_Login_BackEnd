const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes/routes')
const authRouter = require('./routes/authRoutes')
const connectDB = require('./db/connectDB')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());
app.use('/april/jwt/api', routes)
app.use('/april/jwt/api', authRouter)





async function init_connection() {
    try {
        await connectDB()
        app.listen(5000, ()=>{console.log("Server Hit & DB Connected")})
    } catch(err) {
        console.log(err)
    }
}

init_connection()
