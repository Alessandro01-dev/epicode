const authController = require('./auth.controller')
const express = require("express")
const router = express.Router()

router.get('/me', authController.loggedUser)

router.post("/login", authController.login)

module.exports = router