const UserModel = require('../models/users.model')
const StyleModel = require('../models/style.model')
const RatingModel = require('../models/rating.model')

const { handleError } = require('../utils')

module.exports = {
  getAllPartners,
  getAllByStyles,
  getPartnerById,
  getPartnerStyles,
  getPartnerRatings
}

function getAllPartners (req, res) {
  const filters = { role: 'partner' }
  if (req.query.name) {
    filters.name = { $regex: `${req.query.name}`, $options: 'i' }
  }
  if (req.query.location) {
    filters.location = {
      $regex: `${req.query.location}`, $options: 'i'
    }
  }
  if (req.query.style) {
    filters.style = {
      $regex: `${req.query.style}`, $options: 'i'
    }
  }
  UserModel
    .find(filters)
    .populate('location')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getAllByStyles (req, res) {
  StyleModel
    .find()
    .populate('category')
    .populate({ path: 'user', populate: { path: 'location' } })
    .then(response => {
      if (req.query.name) { response = response.filter(e => e.user.name.toLowerCase().includes(req.query.name.toLowerCase())) }

      if (req.query.location) { response = response.filter(e => e.user.location.name === req.query.location) }

      if (req.query.style) { response = response.filter(e => e.category.name === req.query.style) }
      res.json(response)
    })

    .catch((err) => handleError(err, res))
}

function getPartnerById (req, res) {
  UserModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getPartnerStyles (req, res) {
  StyleModel
    .find({ user: req.params.id })
    .populate('user')
    .populate('category')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getPartnerRatings (req, res) {
  RatingModel
    .find({ partner: req.params.id })
    .populate('user')
    .populate('partner')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
