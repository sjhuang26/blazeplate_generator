const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')

// // // // BLAZEPLATE WHITESPACE
// // // //
// // // // BLAZEPLATE WHITESPACE

// Password encryption helper function
function encryptPassword (password) {
    return crypto.createHmac('sha1', process.env.PASSWORD_ENCRYPTION_SECRET)
        .update(password)
        .digest('base64')
}

// // // // BLAZEPLATE WHITESPACE
// // // //
// // // // BLAZEPLATE WHITESPACE

const <%= schema.class_name %> = new Schema({
  <% for (index in schema.attributes) { %>
  <% let attr = schema.attributes[index] %>
  <% if (attr.datatype === 'BOOL') { %>
  <% continue %>
  <% } else if (attr.datatype === 'BOOL') { %>
  <%= attr.identifier %>: {
    type: Boolean
  },
  <% } else if (attr.datatype === 'NUMBER') { %>
  <%= attr.identifier %>: {
    type: Number,
    required: <%= attr.required %>,
    unique: <%= attr.unique %>
  },
  <% } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'BELONGS_TO') { %>
  <%= attr.identifier %>: {
    type: Schema.Types.ObjectId,
    ref: '<%= attr.datatypeOptions.schema_label %>'
  },
  <% } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_MANY') { %>
  <%= attr.identifier %>: [{
    type: Schema.Types.ObjectId,
    ref: '<%= attr.datatypeOptions.schema_label %>'
  }],
  <% } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_ONE') { %>
  <%= attr.identifier %>: [{
    type: Schema.Types.ObjectId,
    ref: '<%= attr.datatypeOptions.schema_label %>'
  }],
  <% } else { %>
  <%= attr.identifier %>: {
    type: String,
    required: <%= attr.required %>,
    unique: <%= attr.unique %>
 },
  <% } %>
  <% } %>
  roles: {
    type: [String],
    default: []
  },
  },
  // Collection options
  {
    timestamps: {
      createdAt: 'createdOn',
      updatedAt: 'updatedOn'
  },
  versionKey: false
});

// // // // BLAZEPLATE WHITESPACE
// // // //
// // // // BLAZEPLATE WHITESPACE

// Create new User document
// TODO - add email
User.statics.create = function ({ name, email, username, password }) {

    // Instantiates new User model
    const user = new this({
        name,
        email,
        username,
        password: encryptPassword(password)
    })

    // Return User.save() Promise
    return user.save()
}

// // // // BLAZEPLATE WHITESPACE

// findOneByUsername
// Find one User by username
User.statics.findOneByUsername = function (username) {
    // Executes MongoDb query
    return this.findOne({ username }).exec()
}

// // // // BLAZEPLATE WHITESPACE

// verify
// Verifies the password parameter of POST /auth/login requests
User.methods.verify = function (password) {
    // Verifies saved password against a request's password
    return this.password === encryptPassword(password)
}

// // // // BLAZEPLATE WHITESPACE

// assignAdmin
// Assigns admin priviledges to a user
User.methods.assignAdmin = function () {
    // Assigns true to `admin` attribute
    this.admin = true

    // Returns `save` Promise
    return this.save()
}

// // // // BLAZEPLATE WHITESPACE

<% for (index in schema.attributes) { %>
<% let attr = schema.attributes[index] %>

<% if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'BELONGS_TO') { %>
<%= schema.class_name %>.methods.get<%= attr.datatypeOptions.schema_label %> = function () {
  return mongoose.model('<%= attr.datatypeOptions.schema_label %>').findById(this.<%= attr.identifier %>);
}

<% } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_MANY') { %>
<%= schema.class_name %>.methods.get<%= attr.datatypeOptions.schema_label_plural %> = function () {
  return mongoose.model('<%= attr.datatypeOptions.schema_label %>').find({ <%= schema.identifier %>_id: this._id });
}

<% } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_ONE') { %>
<%= schema.class_name %>.methods.get<%= attr.datatypeOptions.schema_label %> = function () {
  return mongoose.model('<%= attr.datatypeOptions.schema_label %>').findById(this.<%= attr.identifier %> });
}

<% } %>
<% } %>

// // // // BLAZEPLATE WHITESPACE
// TODO - absract schema.class_name
module.exports = mongoose.model('<%= schema.class_name %>', <%= schema.label.split(' ').join('') %>)
// // // // BLAZEPLATE WHITESPACE
