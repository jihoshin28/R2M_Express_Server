const Customer = require('../models/customer')
// const Driver = require('../models/driver')

const Login = async(req, res) => {
    try{
        let user_ids = req.body.user_ids
        res.header('Content-Type', 'application/json')
        const newContact = new Contact({
            users: user_ids,
            messages: []
        })
        newContact.save((err) => {
            if(err) throw err
        }) 

        for(let i = 0; i < user_ids.length; i++) {
            User.findById(user_ids[i], function (err, user) {
                if (err) throw err
                user.chats = [...user.chats, newChat]
                user.save((err) => {
                    if(err) throw err
                })
            });
        }
        
        res.json({newContact}).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const GoogleAuth = (req, res) => {
    try{
        let user_ids = req.body.user_ids
        res.header('Content-Type', 'application/json')
        const newContact = new Contact({
            users: user_ids,
            messages: []
        })
        newContact.save((err) => {
            if(err) throw err
        }) 

        for(let i = 0; i < user_ids.length; i++) {
            User.findById(user_ids[i], function (err, user) {
                if (err) throw err
                user.chats = [...user.chats, newChat]
                user.save((err) => {
                    if(err) throw err
                })
            });
        }
        
        res.json({newContact}).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const PhoneAuth = (req, res) => {
    try{
        let user_ids = req.body.user_ids
        res.header('Content-Type', 'application/json')
        const newContact = new Contact({
            users: user_ids,
            messages: []
        })
        newContact.save((err) => {
            if(err) throw err
        }) 

        for(let i = 0; i < user_ids.length; i++) {
            User.findById(user_ids[i], function (err, user) {
                if (err) throw err
                user.chats = [...user.chats, newChat]
                user.save((err) => {
                    if(err) throw err
                })
            });
        }
        
        res.json({newContact}).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

module.exports = {
    Login,
    GoogleAuth,
    PhoneAuth
}