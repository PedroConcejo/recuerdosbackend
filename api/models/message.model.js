const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema(
  {
    room: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'room'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'user'
    },
    msg: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Number,
      default: Date.now()
    }
  }
)

const messageModel = mongoose.model('message', messageSchema)

module.exports = messageModel
