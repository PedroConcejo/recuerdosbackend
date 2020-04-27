const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    partner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    subject: {
      type: String,
      required: true
    },
    createdAt: {
      type: Number,
      default: Date.now()
    }
  }
)

const roomModel = mongoose.model('room', roomSchema)

module.exports = roomModel
