const LocationModel = require('../models/location.model')
const { handleError } = require('../utils')

module.exports = {
  getAllLocations
}

function getAllLocations (req, res) {
  LocationModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
