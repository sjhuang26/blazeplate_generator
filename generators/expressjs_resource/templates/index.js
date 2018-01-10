const router = require('express').Router();
const controller = require('./<%= schema.identifier %>.controller');

// // // //

// GET /<%= schema.plural_identifier %>
router.get('/', controller.list);

// POST /<%= schema.plural_identifier %>
router.post('/', controller.create);

// GET /<%= schema.plural_identifier %>/:id
router.get('/:id', controller.show);

// PUT /<%= schema.plural_identifier %>/:id
router.put('/:id', controller.update);

// DELETE /<%= schema.plural_identifier %>/:id
router.delete('/:id', controller.delete);

// // // //

module.exports = router;
