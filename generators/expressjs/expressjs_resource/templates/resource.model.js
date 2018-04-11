const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // // // BLAZEPLATE WHITESPACE
// // // //
// // // // BLAZEPLATE WHITESPACE

const <%= schema.class_name %> = new Schema({
  <% for (index in schema.attributes) { %>
  <% let attr = schema.attributes[index] %>
  <% if (attr.datatype === 'BOOL') { %>
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
