const express = require('express')

const router = express.Router()

const authRouter = require('./auth')

router.use('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello World' })
})
router.use('/api/auth', authRouter)

module.exports = router
