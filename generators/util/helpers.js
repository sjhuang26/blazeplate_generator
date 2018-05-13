const _ = require('lodash')

// formatBuild
// Fomats the build parameters for the generator
// Mostly adds some additional metadata to each relation to simplify template rendering
module.exports.formatBuild = (build) => {

    // Iterates over each schema
    build.app.schemas = _.map(build.app.schemas, (schema) => {

        // Iterates over all attributes, handles relations
        schema.attributes = _.map(schema.attributes, (attr) => {
            if (attr.datatype !== 'RELATION') return attr

            let relatedSchema = _.find(build.app.schemas, { _id: attr.datatypeOptions.schema_id })

            // Debugging
            // console.log(attr.datatypeOptions)
            // console.log(relatedSchema)

            // Pulls metadata from relatedSchema
            let { label, label_plural, identifier, identifier_plural, class_name } = relatedSchema
            attr.datatypeOptions.schema_label = label
            attr.datatypeOptions.schema_label_plural = label_plural
            attr.datatypeOptions.schema_identifier = identifier
            attr.datatypeOptions.schema_identifier_plural = identifier_plural
            attr.datatypeOptions.schema_class_name = class_name
            attr.datatypeOptions.lead_attr = relatedSchema.attributes[0].identifier
            return attr
        })

        return schema
    })

    // Defines the data to split up build.app.seeds by the records' respective schemas
    build.app.seed_data = {}
    _.each(build.app.schemas, (s) => {
        build.app.seed_data[s._id] = {
            identifier: s.identifier_plural,
            records: []
        }
    })

    // Iterates over each piece of seed data
    _.each(build.app.seeds, (seed) => {
        let seedObject = {}
        seedObject._id = { '$oid': seed._id }
        seedObject = {
            ...seedObject,
            ...seed.attributes
        }
        // Adds to build.app.seed_data object
        build.app.seed_data[seed.schema_id].records.push(seedObject)
    })

    return build
}
