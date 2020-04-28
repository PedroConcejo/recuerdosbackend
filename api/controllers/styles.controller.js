const StyleModel = require('../models/style.model')

const { handleError } = require('../utils')

module.exports = {
  createStyle,
  getMystyles,
  deleteStyle,
  getStyle,
  updateStyle
}

function createStyle (req, res) {
  const styleBody = {
    user: res.locals.user._id,
    ...req.body
  }
  StyleModel
    .create(styleBody)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getMystyles (req, res) {
  StyleModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getStyle (req, res) {
  StyleModel
    .findById(req.params.styleid)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteStyle (req, res) {
  StyleModel
    .remove({ _id: req.params.styleid })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateStyle (req, res) {
  StyleModel
    .findByIdAndUpdate(req.params.styleid, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
