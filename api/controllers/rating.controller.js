const RatingModel = require('../models/rating.model')

const { handleError } = require('../utils')

module.exports = {
  createRating,
  getPartnerRatings,
  deleteRating,
  getRating,
  updateRating
}

function createRating (req, res) {
  const ratingBody = {
    user: res.locals.user._id,
    ...req.body
  }
  RatingModel
    .create(ratingBody)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getPartnerRatings (req, res) {
  RatingModel
    .find({ partner: req.body.partner })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getRating (req, res) {
  RatingModel
    .findById(req.params.ratingid)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteRating (req, res) {
  RatingModel
    .remove({ _id: req.params.ratingid })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateRating (req, res) {
  RatingModel
    .findByIdAndUpdate(req.params.ratingid, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
