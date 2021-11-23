const models = require('../models')

const getAllItems = async(req, res) => {
    let items = await models.Item.findAll()
    if(items.length === 0){
        return res.json({"status": "There are no items."}).status(200)
    }
    return res.json(items).status(200)
}

const getItem = async(req, res) => {
    console.log(req.params.id)
    let item = await models.Item.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!item){
        return res.json({"error": "Item not found"}).status(200)
    } else {
        return res.json(item).status(200)
    }

}

const createItem = async(req, res) => {
    console.log(req.body.itemInfo)
    const newItem = await models.Item.create(req.body.itemInfo)
    // need to add validator logic
    console.log(newItem)
    res.json(newItem).status(200)
}

const updateItem = async(req, res) => {
    const updatedItem = await models.Item.update(req.body.itemInfo)
    console.log(updatedItem)
    res.json(updatedItem).status(200)
}

const deleteItem = async(req, res) => {
    // await models.Item.destroy(req.params.id)
}

module.exports = {
    getAllItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}