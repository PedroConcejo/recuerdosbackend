const UserModel = require('../models/users.model')

const { handleError } = require('../utils')

module.exports = {
  addFav,
  getMyFav,
  removeFav,
  getMyFavDisplay
}

function addFav (req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.user._id, { $push: { favorites: req.body.favorites } }, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getMyFav (req, res) {
  UserModel
    .find({ _id: res.locals.user._id })
    .then(response => res.json(response[0].favorites))
    .catch((err) => handleError(err, res))
}

function removeFav (req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.user._id, { $pull: { favorites: req.params.favid } }, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function getMyFavDisplay (req, res) {
  UserModel
    .find({ _id: res.locals.user._id })
    .populate({ path: 'favorites', model: 'style' })
    .populate({ path: 'favorites', populate: { path: 'user', populate: { path: 'location' } } })
    .populate({ path: 'favorites', populate: { path: 'category' } })
    .then(response => res.json(response[0].favorites))
    .catch((err) => handleError(err, res))
}
