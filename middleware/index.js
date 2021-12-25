const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    let token = req.headers["Admin-Auth"]

    if(!token){
        return res.status(403).send({
            message: "No token!"
        })
    }

    jwt.verify(token, process.env.ADMIN_SECRET, (err, user) => {
        if(err){
            return res.status(401).send({
                message: "Unauthorized"
            })
        }
        next()
    })
}

module.exports = {
    verifyToken
}