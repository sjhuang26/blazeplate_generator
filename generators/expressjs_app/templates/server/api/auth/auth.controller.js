const jwt = require('jsonwebtoken')
const User = require('../user/user.model')
const RedisClient = require('../../lib/redis')

// // // //

// POST /api/auth/register
// { username, password }
exports.register = (req, res) => {

    // Parses username, password parameters from req.body
    const { username, password } = req.body
    let newUser = null

    // create a new user if does not exist
    const create = (user) => {
        if(user) {
            throw new Error('username exists')
        } else {
            return User.create(username, password)
        }
    }

    // count the number of the user
    const count = (user) => {
        newUser = user
        return User.count({}).exec()
    }

    // assign admin if count is 1
    const assign = (count) => {
        if(count === 1) {
            return newUser.assignAdmin()
        } else {
            // if not, return a promise that returns false
            return Promise.resolve(false)
        }
    }

    // respond to the client
    const respond = (isAdmin) => {
        res.json({
            message: 'registered successfully',
            admin: isAdmin ? true : false
        })
    }

    // run when there is an error (username exists)
    const onError = (error) => {
        res.status(409).json({
            message: error.message
        })
    }

    // check username duplication
    User.findOneByUsername(username)
    .then(create)
    .then(count)
    .then(assign)
    .then(respond)
    .catch(onError)
}

// // // //

// POST /api/auth/login
// { username, password }
exports.login = (req, res) => {
    const { username, password } = req.body
    const secret = req.app.get('jwt-secret')

    // check the user info & generate the jwt
    const check = (user) => {
        if(!user){
            // user does not exist
            throw new Error('login failed')
        }
        else {

            // user exists, check the password
            if (user.verify(password)) {

                // Assembles JWT Paylod response
                const jwt_paylod = {
                    id: user._id.toString(),
                    username: user.username
                }

                const jwt_options = {
                    expiresIn: '7d',
                    issuer: 'eb.com',
                    subject: 'user_info'
                }

                // create a promise that generates jwt asynchronously
                return new Promise((resolve, reject) => {

                    const jwtCallback = (err, token) => {
                        if (err) reject(err)
                        resolve({ token, user })
                    }

                    jwt.sign(jwt_paylod, secret, jwt_options, jwtCallback)

                })

            }

            // Invalid password
            else {
                throw new Error('login failed')
            }
        }
    }

    // respond the token
    const respond = ({ token, user }) => {

        // Assembles response_payload
        const response_payload = {
            id: user._id,
            username: user.username,
            token: token
        }

        // Stores token in Redis
        // TODO - set token expiration
        return RedisClient.set(user._id.toString(), token, (err, reply) => {

            // Redis write error
            if (err) {
                res.writeHead(301, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'An unknown exception has occured.' }));
            }

            // Assembles response_payload
            const response_payload = {
                username: user.username,
                _id: user._id.toString(),
                token: token
            };

            // Success - send token to client
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response_payload));

        });


        res.json(response_payload).end()
    }

    // error occured
    const onError = (error) => {
        res.status(403).json({
            message: error.message
        })
    }

    // find the user
    User.findOneByUsername(username)
    .then(check)
    .then(respond)
    .catch(onError)

}
