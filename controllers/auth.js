const dotenv = require('dotenv').config()

const Login = async(req, res) => {
    
    console.log(req.body.loginInfo)
    let password = req.body.password
    let username = req.body.username

    if(username !== process.env.ADMIN_USERNAME){
        return res.json({
            success: false,
            message: 'Incorrect username!'
        })
    } else {
        if(myPassword === process.env.ADMIN_PASSWORD){
    
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
                message: "Passwords do not match!"
            })
        }
        
    }

}

module.exports = {
    Login
}