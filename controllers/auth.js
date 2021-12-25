const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const { json } = require('sequelize/dist')

const Login = async(req, res) => {
    
    console.log(req.body.loginInfo)
    let password = req.body.loginInfo.password
    let username = req.body.loginInfo.username

    if(username !== process.env.ADMIN_USERNAME){
        return res.json({
            success: false,
            message: 'Incorrect username!'
        })
    } else {
        if(password === process.env.ADMIN_PASSWORD){
    
            const token = jwt.sign({
                username: req.body.username,
                password: req.body.password
            },
            process.env.ADMIN_SECRET)
            console.log(token, 'token')
            return res.json({
                success: true,
                message: "Authorization successful!",
                token: token
            })
        } else {
            return res.json({
                success: false,
                message: "Incorrect password!"
            })
        }
        
    }

}

const verifyToken = (req, res) => {
    let token = req.body.token

    if(!token){
        return res.status(200).send({
            message: "No token!"
        })
    }

    jwt.verify(token, process.env.ADMIN_SECRET, (err, response) => {
        if(err){
            return res.status(200).send({
                message: "Unauthorized"
            })
        }
        return res.json({status: "Authorized", response}).status(200)
    })
}

module.exports = {
    Login,
    verifyToken
}