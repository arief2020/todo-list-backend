const express = require('express')
const morgan = require('morgan')
const router = require('./router/index')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')

const app = express()

app.use(morgan('tiny'))
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

app.use(router)
app.use(errorHandler)

module.exports = app
