const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getAllPartners,
  getPartnersById
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
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getPartnersById (req, res) {
  UserModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
