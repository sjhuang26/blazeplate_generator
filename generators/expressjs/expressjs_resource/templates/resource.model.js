const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // // //
<% let schemaLabel = schema.label.split(' ').join('') %>

const <%= schemaLabel %> = new Schema({
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
  <% } else if (attr.datatype === 'BELONGS_TO') { %>
  <%= attr.identifier %>: {
    type: Schema.Types.ObjectId,
    ref: '<%= attr.datatypeOptions.schema_label %>'
  },
  <% } else if (attr.datatype === 'HAS_MANY') { %>
  <%= attr.identifier %>: [{
    type: Schema.Types.ObjectId,
    ref: '<%= attr.datatypeOptions.schema_label %>'
  }],
  <% } else if (attr.datatype === 'HAS_ONE') { %>
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

// // // //


 <% for (index in schema.attributes) { %>
 <% let attr = schema.attributes[index] %>

<% if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'BELONGS_TO') { %>
<%= schemaLabel %>.methods.get<%= attr.datatypeOptions.schema_label %> = function (cb){
  return mongoose.model('<%= attr.datatypeOptions.schema_label %>').findById(this.<%= attr.identifier %>);
}

<% } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_MANY') { %>
<%= schemaLabel %>.methods.get<%= attr.datatypeOptions.schema_label_plural %> = function (cb){
  return mongoose.model('<%= attr.datatypeOptions.schema_label %>').find({ <%= schema.identifier %>_id: this._id });
}

<% } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_ONE') { %>
<%= schemaLabel %>.methods.get<%= attr.datatypeOptions.schema_label %> = function (cb){
  return mongoose.model('<%= attr.datatypeOptions.schema_label %>').findById(this.<%= attr.identifier %> });
}

<% } %>
<% } %>

// TODO - absract schemaLabel
module.exports = mongoose.model('<%= schemaLabel %>', <%= schema.label.split(' ').join('') %>)
