const RoomModel = require('../models/room.model')
const UserModel = require('../models/users.model')
const MessageModel = require('../models/message.model')
const StyleModel = require('../models/style.model')

const { handleError } = require('../utils')

module.exports = {
  getMe,
  updateUser,
  deleteMe,
  startRoom,
  getMyRooms,
  getRoom,
  deleteRoom,
  newMsn,
  createStyle,
  getMystyles,
  deleteStyle,
  getStyle,
  updateStyle
}

function getMe (req, res) {
  UserModel
    .find({ _id: res.locals.user._id })
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

function startRoom (req, res) {
  const roomBody = {
    user: res.locals.user._id,
    partner: req.body.partner,
    subject: req.body.subject
  }
  RoomModel
    .create(roomBody)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getMyRooms (req, res) {
  RoomModel
    .find({ user: res.locals.user._id })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getRoom (req, res) {
  RoomModel
    .findById(req.params.roomid)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteRoom (req, res) {
  RoomModel
    .remove({ _id: req.params.roomid })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function newMsn (req, res) {
  const roomBody = {
    writer: res.locals.user._id,
    msg: req.body.msg,
    room: req.params.roomid
  }
  MessageModel
    .create(roomBody)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
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
