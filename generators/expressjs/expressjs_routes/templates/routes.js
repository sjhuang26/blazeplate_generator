const router = require('express').Router()

// // // //

// Bootstrap API module routers
router.use('/auth', require('./api/auth'))
<%_ for (index in appSchema.schemas) { _%>
router.use('/<%= appSchema.schemas[index].identifier_plural %>', require('./api/<%= appSchema.schemas[index].identifier %>'))
<%_ } _%>

// // // //

module.exports = router
