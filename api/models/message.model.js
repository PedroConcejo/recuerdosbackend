const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true
    },
    room: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'room'
    },
    user: {
      type: Schema.Types.ObjectId,
      refPath: 'onModel'
    },
    onModel: {
      type: String,
      required: true,
      enum: ['user', 'partner']
    },
    timestamps: {
      createdAt: 'created_at'
    }
  }
)

const Message = mongoose.model('Message', MessageSchema)

module.exports = { Message }