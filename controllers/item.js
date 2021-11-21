const models = require('../models')

const getAllItems = async(req, res) => {
    console.log(req.params.id)
    await models.Item.findAll({}, (err, items) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(items).status(200)
    })
}

const getItem = async(req, res) => {
    console.log(req.params.id)
    await models.Item.find({_id: req.params.id}, (err, item) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(item).status(200)
    })
}

const createItem = async(req, res) => {
    await models.Item.create(req.body.itemInfo, (err, newItem) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(newItem).status(200)
    })
}

const updateItem = async(req, res) => {
    await models.Item.update(req.body.itemInfo, (err, updatedItem) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(updatedItem).status(200)
    })
}

const deleteItem = async(req, res) => {
    await models.Item.delete(req.body.itemInfo, (err, deletedItem) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(deletedItem).status(200)
    })
}

module.exports = {
    getAllItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}