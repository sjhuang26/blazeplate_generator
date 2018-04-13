// <%= schema.label %> Containers
import <%= schema.label %>List from '@/containers/<%= schema.identifier %>_list'
import <%= schema.label %>New from '@/containers/<%= schema.identifier %>_new'
import <%= schema.label %>Show from '@/containers/<%= schema.identifier %>_show'
import <%= schema.label %>Edit from '@/containers/<%= schema.identifier %>_edit'

// // // // BLAZEPLATE WHITESPACE

const <%= schema.label %>ListRoute = {
  path: '/<%= schema.identifier_plural %>',
  component: <%= schema.label %>List
}

// // // // BLAZEPLATE WHITESPACE

const <%= schema.label %>NewRoute = {
  path: '/<%= schema.identifier_plural %>/new',
  component: <%= schema.label %>New
}

// // // // BLAZEPLATE WHITESPACE

const <%= schema.label %>ShowRoute = {
  path: '/<%= schema.identifier_plural %>/:id',
  component: <%= schema.label %>Show,
  props: true
}

// // // // BLAZEPLATE WHITESPACE

const <%= schema.label %>EditRoute = {
  path: '/<%= schema.identifier_plural %>/:id/edit',
  component: <%= schema.label %>Edit,
  props: true
}

// // // // BLAZEPLATE WHITESPACE

export default [
  <%= schema.label %>ListRoute,
  <%= schema.label %>NewRoute,
  <%= schema.label %>ShowRoute,
  <%= schema.label %>EditRoute
]
// // // // BLAZEPLATE WHITESPACE