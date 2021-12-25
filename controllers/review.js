const models = require('../models')

const getAllReviews = async(req, res) => {
    let reviews = await models.Review.findAll()
    if(reviews.length === 0){
        return res.json([]).status(200)
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
    console.log(req.body.reviewInfo)
    try {
        const newReview = await models.Review.create(req.body.reviewInfo)
        res.send(newReview).status(200)
    } catch(err) {
        res.send(err).status(400)
    }
}

const updateReview = async(req, res) => {
    try {
        const updatedReview = await models.Review.update(req.body.reviewInfo, {
            where: {
                id: req.params.id
            }
        })

        if(updatedReview[0] === 0){
            throw ({'errors': [
                {
                    "type": "Null Id",
                    "message": "No Id with that name"
                }
            ]})
        } 
        res.json({"status": `Review with id ${updatedReview[0]} updated.`}).status(200)
    } catch(err){
        res.send(err).status(400)
    }
}

const deleteReview = async(req, res) => {
    try {
        const deletedReviewId = await models.Review.destroy({
            where: {
              id: req.params.id
            }
        });

        if(deletedReviewId === 0){
            throw ({'errors': [
                {
                    "type": "Null Id",
                    "message": "No Id with that name"
                }
            ]})
        } 
        res.json({"status": `Review with id ${deletedReviewId} deleted.`})
    } catch (err){
        res.send(err).status(400)
    }
}

module.exports = {
    getAllReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview
}