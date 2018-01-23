const router = require('express').Router()
const controller = require('./auth.controller')

// // // //

// POST /register
router.post('/register', controller.register)

// POST /login
router.post('/login', controller.login)

// // // //

module.exports = router
