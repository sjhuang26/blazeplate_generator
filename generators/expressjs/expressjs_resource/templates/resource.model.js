const mongoose = require('mongoose')

// // // //

const <%= schema.class_name %> = new mongoose.Schema({
  <%_ for (index in schema.attributes) { _%>
  <%_ let attr = schema.attributes[index] _%>
  <%_ if (attr.datatype === 'BOOL') { _%>
  <%= attr.identifier %>: {
    type: Boolean
  },
  <%_ } else if (attr.datatype === 'NUMBER') { _%>
  <%= attr.identifier %>: {
    type: Number,
    required: <%= attr.required %>,
    unique: <%= attr.unique %>
  },
  <%_ } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'BELONGS_TO') { _%>
  <%= attr.identifier %>: {
    type: mongoose.Schema.Types.ObjectId,
    ref: '<%= attr.datatypeOptions.schema_class_name %>'
  },
  <%_ } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_MANY') { _%>
  <%= attr.identifier %>: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: '<%= attr.datatypeOptions.schema_class_name %>'
  }],
  <%_ } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'OWNS_MANY') { _%>
  <%_ continue _%>
  <%_ } else if (attr.datatype === 'DATETIME') { _%>
  <%= attr.identifier %>: {
    type: Date,
    required: <%= attr.required %>,
    unique: <%= attr.unique %>
  },
  <%_ } else if (attr.datatype === 'JSON') { _%>
  <%= attr.identifier %>: {
    type: mongoose.Schema.Types.Mixed,
    required: <%= attr.required %>,
    default: {}
  },
  <%_ } else { _%>
  <%= attr.identifier %>: {
    type: String,
    required: <%= attr.required %>,
    unique: <%= attr.unique %>
  },
  <%_ } _%>
  <%_ } _%>
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

<%_ for (index in schema.attributes) { _%>
<%_ let attr = schema.attributes[index] _%>
<%_ if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'BELONGS_TO') { _%>
<%= schema.class_name %>.methods.get<%= attr.datatypeOptions.schema_class_name %> = function () {
  return mongoose.model('<%= attr.datatypeOptions.schema_label %>').findById(this.<%= attr.identifier %>);
}

<%_ } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_MANY') { _%>
<%= schema.class_name %>.methods.get<%= attr.datatypeOptions.schema_class_name_plural %> = function () {
  return mongoose.model('<%= attr.datatypeOptions.schema_label %>').find({ <%= schema.identifier %>_id: this._id });
}

<%_ } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_ONE') { _%>
<%= schema.class_name %>.methods.get<%= attr.datatypeOptions.schema_class_name %> = function () {
  return mongoose.model('<%= attr.datatypeOptions.schema_label %>').findById(this.<%= attr.identifier %> });
}
<%_ } _%>
<%_ } _%>
// // // //

module.exports = mongoose.model('<%= schema.class_name %>', <%= schema.class_name %>)
