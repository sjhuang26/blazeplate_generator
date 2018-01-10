// <%= schema.label %> Containers
import <%= schema.label %>List from '@/containers/<%= schema.identifier %>_list'
import <%= schema.label %>New from '@/containers/<%= schema.identifier %>_new'
import <%= schema.label %>Show from '@/containers/<%= schema.identifier %>_show'
import <%= schema.label %>Edit from '@/containers/<%= schema.identifier %>_edit'

export const <%= schema.label %>ListRoute = {
  path: '/<%= schema.plural_identifier %>',
  component: <%= schema.label %>List
}

export const <%= schema.label %>NewRoute = {
  path: '/<%= schema.plural_identifier %>/new',
  component: <%= schema.label %>New
}

export const <%= schema.label %>ShowRoute = {
  path: '/<%= schema.plural_identifier %>/:id',
  component: <%= schema.label %>Show,
  props: true
}

export const <%= schema.label %>EditRoute = {
  path: '/<%= schema.plural_identifier %>/:id/edit',
  component: <%= schema.label %>Edit,
  props: true
}

// Add to src/routers/index.js:
// import { <%= schema.label %>ListRoute, <%= schema.label %>ShowRoute, <%= schema.label %>NewRoute, <%= schema.label %>EditRoute } from './<%= schema.identifier %>'
// <%= schema.label %>ListRoute,
// <%= schema.label %>NewRoute,
// <%= schema.label %>ShowRoute,
// <%= schema.label %>EditRoute