const models = require('../models')

const getAllReviews= async(req, res) => {
    console.log(req.params.id)
    await models.Review.findAll({}, (err, reviews) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(reviews).status(200)
    })
}

const getReview= async(req, res) => {
    console.log(req.params.id)
    await models.Review.find({_id: req.params.id}, (err, review) => {
        if(err) {
            return res.send(err).status(500)
        }
        res.json(review).status(200)
    })
}

const createReview = async(req, res) => {
    await models.Review.create(req.body.ReviewInfo, (err, newReview) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(newReview).status(200)
    })
}

const updateReview = async(req, res) => {
    await models.Review.update(req.body.ReviewInfo, (err, updatedReview) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(updatedReview).status(200)
    })
}

const deleteReview = async(req, res) => {
    await models.Review.delete(req.body.ReviewInfo, (err, deletedReview) => {
        if(err){
            return res.send(err).status(500)
        }
        res.json(deletedReview).status(200)
    })
}

module.exports = {
    getAllReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview
}