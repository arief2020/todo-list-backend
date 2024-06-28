const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const jwtSign = (dataObj, expireTime = '1d') => {
  return jwt.sign(dataObj, process.env.JWT_AUTH_SECRET, {
    expiresIn: expireTime,
  })
}

const jwtVerify = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_AUTH_SECRET)
  } catch (error) {
    throw new Error('Token is not valid')
  }
}

const jwtDecode = (token) => {
  try {
    return jwt.decode(token)
  } catch (error) {
    throw new Error('Token cannot be decoded')
  }
}

module.exports = {
  jwtSign,
  jwtVerify,
  jwtDecode,
}
