const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      default: null
    },
    partner: {
      type: Schema.Types.ObjectId,
      ref: 'partner',
      default: null
    }
  }
)

const Room = mongoose.model('Room', RoomSchema)

module.exports = { Room }
