const router = require('express').Router()
const controller = require('./user.controller')

// // // //

router.get('/', controller.list)
router.post('/assign-admin/:username', controller.assignAdmin)

// // // //

module.exports = router
