const express = require('express')
const mongoose = require('mongoose')
const membersRouter = require('./routes/membersRoutes')

require('dotenv').config()

const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,  useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected To Database'))

app.use(express.json())

app.use('/api/members', membersRouter)

app.listen(3000, () => console.log("Server Started On http://localhost:3000"))