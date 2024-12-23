const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require("dotenv").config()
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/auth", userRoutes)

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB successfully connected")
}).catch((err) => {
    console.log(err.message)
})

app.listen(process.env.PORT, () => {
    console.log("Server is hosted at http://localhost:8000")
})