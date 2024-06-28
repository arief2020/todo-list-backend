const AuthService = require('../services/AuthService')

class AuthController {
  static async login(req, res, next) {
    try {
		const response = await AuthService.login(req.body, res)
    return res.status(200).json(response)
    } catch (error) {
		next(error)
	}
  }

  static async register(req, res, next) {
    try {
      const response = await AuthService.register(req.body)
      return res.status(201).json(response)
    } catch (error) {
      next(error)
    }
  }

  static async logout(req, res, next) {}
}

module.exports = AuthController
