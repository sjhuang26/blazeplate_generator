const router = require('express').Router();
const controller = require('./<%= schema.identifier %>.controller');
<% if (schema.identifier === 'user') { %>
const authorization = require('../middleware/authorization')
<% } %>
// // // // BLAZEPLATE WHITESPACE
// // // //

// // // // BLAZEPLATE WHITESPACE
// GET /<%= schema.identifier_plural %>
router.get('/', controller.list);

// // // // BLAZEPLATE WHITESPACE
// POST /<%= schema.identifier_plural %>
router.post('/', controller.create);

<% if (schema.identifier === 'user') { %>
// // // // BLAZEPLATE WHITESPACE
// GET /<%= schema.identifier_plural %>/profile
router.get('/profile', authorization, controller.profile)
<% } %>

// // // // BLAZEPLATE WHITESPACE
// GET /<%= schema.identifier_plural %>/:id
router.get('/:id', controller.show);

// // // // BLAZEPLATE WHITESPACE
// PUT /<%= schema.identifier_plural %>/:id
router.put('/:id', controller.update);

// // // // BLAZEPLATE WHITESPACE
// DELETE /<%= schema.identifier_plural %>/:id
router.delete('/:id', controller.delete);



<% for (index in schema.attributes) { %>
<% let attr = schema.attributes[index] %>

<% if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'BELONGS_TO') { %>
// // // // BLAZEPLATE WHITESPACE
// GET /<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier %>
router.get('/:id/<%= attr.datatypeOptions.schema_identifier %>', controller.show<%= attr.datatypeOptions.schema_label %>);

<% } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_MANY') { %>
// // // // BLAZEPLATE WHITESPACE
// GET /<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier_plural %>
router.get('/:id/<%= attr.datatypeOptions.schema_identifier_plural %>', controller.show<%= attr.datatypeOptions.schema_label_plural %>);

<% } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_ONE') { %>
// // // // BLAZEPLATE WHITESPACE
// GET /<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier %>
router.get('/:id/<%= attr.datatypeOptions.schema_identifier %>', controller.show<%= attr.datatypeOptions.schema_label %>);


<% } %>
<% } %>

// // // // BLAZEPLATE WHITESPACE
// // // //
// // // // BLAZEPLATE WHITESPACE

module.exports = router;
