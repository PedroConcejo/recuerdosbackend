const RoomModel = require('../models/room.model')
const MessageModel = require('../models/message.model')

const { handleError } = require('../utils')

module.exports = {
  startRoom,
  getMyRooms,
  getRoom,
  deleteRoom,
  newMsn
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
