const Driver = require('../models/driver')

const getDriver= async(req, res) => {
    console.log(req.params.id)
    Driver.find({_id: req.params.id}, (err, driver) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(driver).status(200)
    })
}

const createDriver = async(req, res) => {
    try{
        let user_ids = req.body.user_ids
        res.header('Content-Type', 'application/json')
        const newDriver = new Driver({
            users: user_ids,
            messages: []
        })
        newDriver.save((err) => {
            if(err) throw err
        }) 
        
        res.json({newDriver}).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const updateDriver = async(req, res) => {
    try{
        const driver = Driver.find({_id: req.params.id})
 
        driver.save((err) => {
            if(err) throw err
        }) 
        res.send(`Removed user with user id ${req.body.user_id} from chat.`).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

const deleteDriver = async(req, res) => {
    try{
        Driver.delete({_id: req.params.id})
        res.send(`Deleted contact with id ${req.params.id}`).status(200)
    } catch(error){
        res.send(error.message).status(500)
    }
}

module.exports = {
    getDriver,
    createDriver,
    updateDriver,
    deleteDriver
}
