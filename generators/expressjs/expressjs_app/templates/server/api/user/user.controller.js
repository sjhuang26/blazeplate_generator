const User = require('./user.model')

// // // //

// GET /users/profile
exports.profile = (req, res) => {
    res.json({ username: 'aeksco', email: 'aeksco@gmail.com' })
}

// // // //

// GET /users
exports.list = (req, res) => {
    // refuse if not an admin
    // if(!req.decoded.admin) {
    //     return res.status(403).json({
    //         message: 'you are not an admin'
    //     })
    // }

    return User.find({}, '-password').exec()
    .then( (users) => {
        res.json({ items: users })
    })

}

// // // //

// POST /users/assign-admin/:username
exports.assignAdmin = (req, res) => {
    // refuse if not an admin
    if(!req.decoded.admin) {
        return res.status(403).json({
            message: 'you are not an admin'
        })
    }

    User.findOneByUsername(req.params.username)
    .then(
        user => {
            if(!user) throw new Error('user not found')
            user.assignAdmin()
        }
    ).then(
        res.json({
            success: true
        })
    ).catch(
        (err) => { res.status(404).json({message: err.message})}
    )
}
