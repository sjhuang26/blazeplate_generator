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

// // // //

module.exports = router;
