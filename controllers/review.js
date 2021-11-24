const models = require('../models')

const getAllReviews = async(req, res) => {
    let reviews = await models.Review.findAll()
    if(reviews.length === 0){
        return res.json({"status": "There are no reviews."}).status(200)
    }
    return res.json(reviews).status(200)
}

const getReview = async(req, res) => {
    console.log(req.params.id)
    let review = await models.Review.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!review){
        return res.json({"error": "Review not found"}).status(200)
    } else {
        return res.json(review).status(200)
    }

}

const createReview = async(req, res) => {
    try {
        const newReview = await models.Review.create(req.body.reviewInfo)
        res.send(newReview).status(200)
    } catch(err) {
        res.send(err).status(500)
    }
}

const updateReview = async(req, res) => {
    const updatedReview = await models.Review.update(req.body.reviewInfo)
    console.log(updatedReview)
    res.json(updatedReview).status(200)
}

const deleteReview = async(req, res) => {
    // await models.Review.destroy(req.params.id)
}

module.exports = {
    getAllReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview
}