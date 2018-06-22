const <%= schema.class_name %> = require('./<%= schema.identifier %>.model')
<%_ for (index in schema.attributes) { _%>
<%_ let attr = schema.attributes[index] _%>
<%_ if (attr.datatype === 'RELATION' && attr.class_name !== schema.class_name) { _%>
const <%= attr.datatypeOptions.schema_class_name %> = require('../<%= attr.datatypeOptions.schema_identifier %>/<%= attr.datatypeOptions.schema_identifier %>.model')
<%_ } _%>
<%_ } _%>

// // // //

function handleError (res) {
    return function(err) {
        return res.status(500).json({ error: err }).end()
    }
}

// // // //

<%_ if (schema.identifier === 'user') { _%>
/**
* @api {get} /api/<%= schema.identifier_plural %> Profile
* @APIname Profile
* @APIgroup <%= schema.class_name %> Controller
* @apidescription Gets profile of the current <%= schema.label %>
* @apiSuccess {json} User's profile
* @apiError (Error) 500 Internal server error
*/
exports.profile = (req, res) => {
    return <%= schema.class_name %>.findOne({ username: req.user.username }, '-password -__v').exec()
    .then( (user) => { res.json(user) })
}
<%_ } _%>
/**
* @api {get} /api/<%= schema.identifier_plural %> Index
* @APIname Index
* @APIgroup <%= schema.class_name %> Controller
* @apidescription Gets list of current <%= schema.label_plural %>
* @apiSuccess {json} Collection of <%= schema.label_plural %>
* @apiError (Error) 500 Internal server error
*/
module.exports.list = (req, res, next) => {
    return <%= schema.class_name %>.find({})
    .then((response) => {
        return res
        .status(200)
        .send(response)
        .end();
    })
    .catch(handleError(res));
};


/**
* @api {POST} /api/<%= schema.identifier_plural %> Create
* @APIname Create
* @APIgroup <%= schema.class_name %> Controller
* @apidescription Creates a new <%= schema.label %>
* @apiSuccess {json} The newly created <%= schema.label %>
* @apiError (Error) 500 Internal server error
*/
module.exports.create = (req, res, next) => {
    <%_ if (schema.identifier === 'user') { _%>
    return User.create(req.body)
    <%_ } else { _%>
    return new <%= schema.class_name %>(req.body).save()
    <%_ } _%>
    .then((response) => {
        return res
        .status(200)
        .send(response)
        .end();
    })
    .catch(handleError(res));
};


/**
* @api {GET} /api/<%= schema.identifier_plural %>/:id Show
* @APIname Show
* @APIgroup <%= schema.class_name %> Controller
* @apidescription Fetch a single <%= schema.label %>
* @apiSuccess {json} The requested <%= schema.label %>
* @apiError (Error) 500 Internal server error
*/
module.exports.show = (req, res, next) => {
    return <%= schema.class_name %>.findById(req.params.id)
    .then((response) => {
        return res
        .status(200)
        .send(response)
        .end();
    })
    .catch(handleError(res));
};

<%_ for (index in schema.attributes) { _%>
<%_ let attr = schema.attributes[index] _%>
<%_ if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'BELONGS_TO') { _%>

/**
* @api {GET} /api/<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier %> show<%= attr.datatypeOptions.schema_label %>
* @APIname show<%= attr.datatypeOptions.schema_label %>
* @APIgroup <%= schema.class_name %> Controller
* @apidescription Gets related <%= attr.datatypeOptions.schema_label %>
* @apiSuccess {json} The related <%= attr.datatypeOptions.schema_label %> model
* @apiError (Error) 500 Internal server error
*/
module.exports.show<%= attr.datatypeOptions.schema_label %> = (req, res, next) => {
    return <%= schema.class_name %>.findById(req.params.id)
    .then((<%= schema.identifier %>) => {

        return <%= attr.datatypeOptions.schema_class_name %>.findById(<%= schema.identifier %>.<%= attr.datatypeOptions.schema_identifier + '_id' %>)
        .then((<%= attr.datatypeOptions.schema_identifier %>) => {
            return res
            .status(200)
            .send(<%= attr.datatypeOptions.schema_identifier %>)
            .end();
        })
        .catch(handleError(res));

    })
    .catch(handleError(res));
};

<% } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_MANY') { %>

/**
* @api {GET} /api/<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier_plural %> show<%= attr.datatypeOptions.schema_label_plural %>
* @APIname show<%= attr.datatypeOptions.schema_label_plural %>
* @APIgroup <%= schema.class_name %> Controller
* @apidescription Gets related <%= attr.datatypeOptions.schema_label_plural %>
* @apiSuccess {json} The related <%= attr.datatypeOptions.schema_label_plural %>
* @apiError (Error) 500 Internal server error
*/
// TODO - this must be refactored to do: RelatedModel.find({ _id: [1,2,3] })
module.exports.show<%= attr.datatypeOptions.schema_label_plural %> = (req, res, next) => {

    return <%= schema.class_name %>.findById(req.params.id)
    .then((response) => {
        return <%= attr.datatypeOptions.schema_class_name %>.find({ _id: response.<%= attr.identifier %> })
        .then((<%= attr.datatypeOptions.schema_identifier_plural %>) => {
            return res
            .status(200)
            .send(<%= attr.datatypeOptions.schema_identifier_plural %>)
            .end();
        })
        .catch(handleError(res));
    })
    .catch(handleError(res));

};

<%_ } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'OWNS_MANY') { _%>

/**
* @api {GET} /api/<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier_plural %> show<%= attr.datatypeOptions.schema_label_plural %>
* @APIname show<%= attr.datatypeOptions.schema_label_plural %>
* @APIgroup <%= schema.class_name %> Controller
* @apidescription Gets related <%= attr.datatypeOptions.schema_label_plural %>
* @apiSuccess {json} The related <%= attr.datatypeOptions.schema_label_plural %>
* @apiError (Error) 500 Internal server error
*/
module.exports.show<%= attr.datatypeOptions.schema_label_plural %> = (req, res, next) => {
    return <%= attr.datatypeOptions.schema_class_name %>.find({ <%= schema.identifier %>_id: req.params.id })
    .then((<%= attr.datatypeOptions.schema_identifier_plural %>) => {
        return res
        .status(200)
        .send(<%= attr.datatypeOptions.schema_identifier_plural %>)
        .end();
    })
    .catch(handleError(res));
};
<%_ } _%>
<%_ } _%>


/**
* @api {PUT} /api/<%= schema.identifier_plural %>/:id Update
* @APIname Update
* @APIgroup <%= schema.class_name %> Controller
* @apidescription Update a single <%= schema.label %>
* @apiSuccess {json} The updated <%= schema.label %>
* @apiError (Error) 500 Internal server error
*/
module.exports.update = (req, res, next) => {
    return <%= schema.class_name %>.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((response) => {
        return res
        .status(200)
        .send(response)
        .end();
    })
    .catch(handleError(res));
};


/**
* @api {DELETE} /api/<%= schema.identifier_plural %>/:id Destroy
* @APIname Destroy
* @APIgroup <%= schema.class_name %> Controller
* @apidescription Destroy a single <%= schema.label %>
* @apiSuccess {json} The destroyed <%= schema.label %>
* @apiError (Error) 500 Internal server error
*/
module.exports.delete = (req, res, next) => {
    return <%= schema.class_name %>.remove({ _id: req.params.id })
    .then((response) => {
        return res
        .status(200)
        .send(response)
        .end();
    })
    .catch(handleError(res));
};
