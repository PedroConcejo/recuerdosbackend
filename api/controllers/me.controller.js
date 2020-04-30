const UserModel = require('../models/users.model')

const { handleError } = require('../utils')

module.exports = {
  getMe,
  updateUser,
  deleteMe
}

function getMe (req, res) {
  UserModel
    .findById({ _id: res.locals.user._id })
    .populate('location')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
function updateUser (req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.user._id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteMe (req, res) {
  UserModel
    .remove({ _id: res.locals.user._id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
