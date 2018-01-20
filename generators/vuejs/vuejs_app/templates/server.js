const express = require('express')
// const morgan = require('morgan')
const port = process.env.PORT || 3000

// // // //

// Express.js App & Configuration
const app = express();

// print the request log on console
// app.use(morgan('dev'));

// Serves static VueJS build
// app.get('/', (req, res) => {
  // res.send('MEH')
// });
app.use(express.static('dist'));

// // // //

// Starts Express app
app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
})
