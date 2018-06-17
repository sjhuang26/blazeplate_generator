// Loads environment variables from .env.test
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.test') });

// Chai configuration
const chai = require("chai");
chai.should();

// Runs before all testing begins
before(async () => {
    console.log('Opening Database connection...')
})

// Import all spec & integration tests here
<%- specPaths.join('\n') %>

// Runs after all tests are complete
after(() => {
    console.log('Closing Database connection.')
})
