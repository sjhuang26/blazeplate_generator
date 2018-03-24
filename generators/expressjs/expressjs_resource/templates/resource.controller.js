const <%= schema.label.split(' ').join('') %> = require('./<%= schema.identifier %>.model')

// // // //

/**
* @api {get} /api/<%= schema.identifier_plural %> Index
* @APIname Index
* @APIgroup <%= schema.label.split(' ').join('') %> Controller
* @apidescription Gets list of current <%= schema.label_plural %>
* @apiSuccess {json} Collection of <%= schema.label_plural %>
* @apiError (Error) 500 Internal server error
*/
// TODO - query middleware (optional)
// TODO - pagination middleware (optional)
module.exports.list = (req, res, next) => {
    return <%= schema.label.split(' ').join('') %>.find({})
    .then((response) => {
        return res
        .status(200)
        .send(response)
        .end();
    })
    .catch(next);
};


/**
* @api {POST} /api/<%= schema.identifier_plural %> Create
* @APIname Create
* @APIgroup <%= schema.label.split(' ').join('') %> Controller
* @apidescription Creates a new <%= schema.label %>
* @apiSuccess {json} The newly created <%= schema.label %>
* @apiError (Error) 500 Internal server error
*/
module.exports.create = (req, res, next) => {
    return new <%= schema.label.split(' ').join('') %>(req.body).save()
    .then((response) => {
        return res
        .status(200)
        .send(response)
        .end();
    })
    .catch(next);
};

/**
* @api {GET} /api/<%= schema.identifier_plural %>/:id Show
* @APIname Show
* @APIgroup <%= schema.label.split(' ').join('') %> Controller
* @apidescription Fetch a single <%= schema.label %>
* @apiSuccess {json} The requested <%= schema.label %>
* @apiError (Error) 500 Internal server error
*/
module.exports.show = (req, res, next) => {
    return <%= schema.label.split(' ').join('') %>.findById(req.params.id)
    .then((response) => {
        return res
        .status(200)
        .send(response)
        .end();
    })
    .catch(next);
};

// // // //

/**
* @api {PUT} /api/<%= schema.identifier_plural %>/:id Update
* @APIname Update
* @APIgroup <%= schema.label.split(' ').join('') %> Controller
* @apidescription Update a single <%= schema.label %>
* @apiSuccess {json} The updated <%= schema.label %>
* @apiError (Error) 500 Internal server error
*/
module.exports.update = (req, res, next) => {
    return <%= schema.label.split(' ').join('') %>.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((response) => {
        return res
        .status(200)
        .send(response)
        .end();
    })
    .catch(next);
};

// // // //

/**
* @api {DELETE} /api/<%= schema.identifier_plural %>/:id Destroy
* @APIname Destroy
* @APIgroup <%= schema.label.split(' ').join('') %> Controller
* @apidescription Destroy a single <%= schema.label %>
* @apiSuccess {json} The destroyed <%= schema.label %>
* @apiError (Error) 500 Internal server error
*/
module.exports.delete = (req, res, next) => {
    return <%= schema.label.split(' ').join('') %>.remove({ _id: req.params.id })
    .then((response) => {
        return res
        .status(200)
        .send(response)
        .end();
    })
    .catch(next);
};
