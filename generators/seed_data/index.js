const _ = require('lodash')
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  writing() {

    // Returns boolean wether or not there is seed data
    function noSeedData (build) {
      let empty = true
      _.each(build.app.seed_data, (s) => {
        if (s.records.length) {
          empty = false
        }
      })
      return empty
    }

    // Short-circuits if there's no seed data present
    if (noSeedData(this.options.build)) {
      return
    }

    // Stores `COPY seed/identifier.json /identifier.json` statements
    let copyStatements = []

    // Stores `mongoimport` statements
    let mongoImports = ['CMD echo "Seeding MongoDB"']

    // Generates COPY and mongoimport statements
    _.each(this.options.build.app.seed_data, (data, schema_id) => {

      // Debug statement
      // console.log(data.records)

      // If some records exist
      if (data.records.length) {

        // COPY statement
        let copyStatement = `COPY seeds/${data.identifier}.json /${data.identifier}.json`
        copyStatements.push(copyStatement)

        // MongoImport statement
        // TODO - remove hard-coded `blazeplate` database name
        let importStatement = `mongoimport --host mongo --db blazeplate --collection ${data.identifier} --type json --file ./${data.identifier}.json --jsonArray`
        mongoImports.push(importStatement)

        // Generates generated/docker/seeds/identifier.json
        this.fs.copyTpl(
          this.templatePath('seeds/data.json'),
          this.destinationPath(this.options.build.dest.root + 'docker/seeds/' + data.identifier + '.json'),
          { jsonData: _.unescape(JSON.stringify(data.records, null, 2)) }
        )

      }
    })

    // Joins copyStatements and mongoImports
    copyStatements = copyStatements.join('\n')
    mongoImports = mongoImports.join(' && \\\n')

    // generated/docker/Dockerfile-MongoSeed
    this.fs.copyTpl(
      this.templatePath('Dockerfile-MongoSeed'),
      this.destinationPath(this.options.build.dest.root + 'docker/Dockerfile-MongoSeed'),
      { mongoImports, copyStatements  }
    )

    // // generated/docker-compose-demo.yml
    // this.fs.copyTpl(
    //   this.templatePath('docker-compose-demo.yml'),
    //   this.destinationPath(this.options.build.dest.root + 'docker-compose-demo.yml'),
    //   { container_name_prefix: this.options.build.app.identifier }
    // )

    // // generated/demo.sh
    // this.fs.copyTpl(
    //   this.templatePath('demo.sh'),
    //   this.destinationPath(this.options.build.dest.root + 'demo.sh'),
    //   {}
    // )

  }
}