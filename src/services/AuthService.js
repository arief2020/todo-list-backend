const { hashPassword, comparePassword } = require('../libs/bcrypt')
const { jwtSign } = require('../libs/jwt')
const AuthRepository = require('../repositories/AuthRepository')

class AuthService {
  static async login(params, res) {
    try {
      const { email, password } = params
      if (!email || !password) {
        const error = new Error('field email and password is required')
        error.name = 'BadRequest'
        throw error
      }
      const haveEmail = await AuthRepository.findByEmail(email)
      if (!haveEmail) {
        const errors = new Error('Email is not registered')
        errors.name = 'ErrorNotFound'
        throw errors
      } 

      const comparePass = comparePassword(password, haveEmail.password)
      if (!comparePass) {
        const errors = new Error('Wrong password')
        errors.name = 'Unauthorized'
        throw errors
      }

      const token = jwtSign({ id: haveEmail.id })
       res.cookie('accessToken', token, {
         httpOnly: true,
         maxAge: 24 * 60 * 60 * 1000, // 1 day
       })
       return { message: 'success login' }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async register(params) {
    try {
      const { fullName, email, password, confirmPassword } = params
      if (!fullName || !email || !password) {
        const error = new Error('field fullName, email, and password is required')
        error.name = 'BadRequest'
        throw error
      }

      if (password !== confirmPassword) {
        const error = new Error('password and confirmPassword does not match')
        error.name = 'BadRequest'
        throw error
      }

      const bcryptPass = hashPassword(password)

      const authRegister = await AuthRepository.register({
        name: fullName,
        email,
        password: bcryptPass,
      })

      return authRegister
    } catch (error) {
      console.log(error)
      if (
        error.name === 'SequelizeUniqueConstraintError' &&
        error.parent.constraint === 'Users_email_key'
      ) {
        const errors = new Error('Email is already registered')
        errors.name = 'Conflict'
        throw errors
      }
      throw error
    }
  }

  static async logout(req, res) {}
}

module.exports = AuthService
