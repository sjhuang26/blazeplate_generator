const Runner = require('./runner')

let runner = new Runner({ foo: 'bar' })

runner.write()
.then(() => {
    console.log('DONEZO!!')
})