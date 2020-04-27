const RoomModel = require('../models/room.model')
const PartnerModel = require('../models/partner.model')

const { handleError } = require('../utils')

module.exports = {
  getAllPartner,
  getProfile,
  updatePartner,
  getPartnerById,
  createStyle,
  deleteStyle,
  newMsn
}

function getAllPartner (req, res) {
  PartnerModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getProfile (req, res) {
  PartnerModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updatePartner (req, res) {
  RoomModel
    .findByIdAndUpdate(req.params.taskid, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createStyle (req, res) {
  RoomModel
    .create({
      user: res.locals.user._id,
      ...req.body
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteStyle (req, res) {
  RoomModel
    .remove({ _id: req.params.roomid })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function newMsn (req, res) {
  RoomModel
    .findByIdAndUpdate(req.params.taskid, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getPartnerById (req, res) {
  RoomModel
    .findById(req.params.taskid)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
