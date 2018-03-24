const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // // //

const <%= schema.label.split(' ').join('') %> = new Schema({
  <% for (index in schema.attributes) { %>
  <% let attr = schema.attributes[index] %>
  <% if (attr.datatype === 'BOOL') { %>
  <%= attr.identifier %>: {
    type: Boolean
  },
  <% } else if (attr.datatype === 'NUMBER') { %>
  <%= attr.identifier %>: {
    type: Number
  },
  <% } else if (attr.datatype === 'BELONGS_TO') { %>
  <%= attr.identifier %>: {
    type: Schema.Types.ObjectId,
    ref: '<%= attr.datatypeOptions.schema_label %>'
  },
  <% } else { %>
  <%= attr.identifier %>: {
    type: String
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

// TODO - absract schema.label.split(' ').join('')
module.exports = mongoose.model('<%= schema.label.split(' ').join('') %>', <%= schema.label.split(' ').join('') %>)
