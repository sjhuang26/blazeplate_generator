const mongoose = require('mongoose')
const app = require('../app')
const config = require('../config')
const port = process.env.PORT || 4000

// // // //

// Connect to MongoDB
mongoose.connect(config.mongodbUri)
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error)

db.once('open', ()=>{

    console.log('Connected to MongoDB')

    app.listen(port, () => {
        console.log(`Express is running on port ${port}`)
    })

});

