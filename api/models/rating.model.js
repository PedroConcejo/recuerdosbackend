const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RatingSchema = new Schema(
  {
    partner: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    rate: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    createdAt: {
      type: Number,
      default: Date.now()
    }
  }
)

const Rating = mongoose.model('rating', RatingSchema)

module.exports = { Rating }
