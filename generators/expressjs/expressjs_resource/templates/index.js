const router = require('express').Router();
const controller = require('./<%= schema.identifier %>.controller');

// // // //

// GET /<%= schema.identifier_plural %>
router.get('/', controller.list);

// POST /<%= schema.identifier_plural %>
router.post('/', controller.create);

// GET /<%= schema.identifier_plural %>/:id
router.get('/:id', controller.show);

// PUT /<%= schema.identifier_plural %>/:id
router.put('/:id', controller.update);

// DELETE /<%= schema.identifier_plural %>/:id
router.delete('/:id', controller.delete);

<% for (index in schema.attributes) { %>
<% let attr = schema.attributes[index] %>

<% if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'BELONGS_TO') { %>
// GET /<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier %>
router.get('/:id/<%= attr.datatypeOptions.schema_identifier %>', controller.show<%= attr.datatypeOptions.schema_label %>);

<% } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_MANY') { %>
// GET /<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier_plural %>
router.get('/:id/<%= attr.datatypeOptions.schema_identifier_plural %>', controller.show<%= attr.datatypeOptions.schema_label_plural %>);

<% } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_ONE') { %>
// GET /<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier %>
router.get('/:id/<%= attr.datatypeOptions.schema_identifier %>', controller.show<%= attr.datatypeOptions.schema_label %>);


<% } %>
<% } %>
// // // //

module.exports = router;
