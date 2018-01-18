const router = require('express').Router()

// // // //

// Bootstrap API routers
router.use('/auth', require('./api/auth'))
router.use('/users', require('./api/user'))
<% for (index in appSchema.schemas) { %>
router.use('/<%= appSchema.schemas[index].identifier_plural %>', require('./api/<%= appSchema.schemas[index].identifier %>'))
<% } %>

// // // //

module.exports = router
