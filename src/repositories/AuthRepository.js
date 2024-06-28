const { User } = require('../../models')

class AuthRepository {
  static async register(data) {
    try {
      const userRegister = await User.create(data)
      return userRegister
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async findByEmail(email) {
    try {
      const user = await User.findOne({ where: { email } })
      return user
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

module.exports = AuthRepository
