const Runner = require('./runner')

let runner = new Runner({ build: { foo: 'barrrrrr!' }})

runner.write()
.then(() => {
    console.log('DONEZO!!')
})