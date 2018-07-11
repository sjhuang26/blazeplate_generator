const router = require('express').Router();
const controller = require('./<%= schema.identifier %>.controller');
<%_ if (schema.identifier === 'user') { _%>
const authorization = require('../middleware/authorization')
<%_ } _%>

// // // //

// GET /<%= schema.identifier_plural %>
router.get('/', controller.list);

// POST /<%= schema.identifier_plural %>
router.post('/', controller.create);
<%_ if (schema.identifier === 'user') { _%>
// GET /<%= schema.identifier_plural %>/profile
router.get('/profile', authorization, controller.profile)
<%_ } _%>

// GET /<%= schema.identifier_plural %>/:id
router.get('/:id', controller.show);

// PUT /<%= schema.identifier_plural %>/:id
router.put('/:id', controller.update);

// DELETE /<%= schema.identifier_plural %>/:id
router.delete('/:id', controller.delete);
<%_ for (index in schema.attributes) { _%>
<%_ let attr = schema.attributes[index] _%>
<%_ if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'BELONGS_TO') { _%>

// GET /<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier %>
router.get('/:id/<%= attr.datatypeOptions.schema_identifier %>', controller.show<%= attr.datatypeOptions.schema_class_name %>);
<%_ } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_MANY') { _%>

// GET /<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier_plural %>
router.get('/:id/<%= attr.datatypeOptions.schema_identifier_plural %>', controller.show<%= attr.datatypeOptions.schema_class_name_plural %>);
<%_ } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'OWNS_MANY') { _%>

// GET /<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier_plural %>
router.get('/:id/<%= attr.datatypeOptions.schema_identifier_plural %>', controller.show<%= attr.datatypeOptions.schema_class_name_plural %>);
<%_ } _%>
<%_ } _%>

// // // //

module.exports = router;
