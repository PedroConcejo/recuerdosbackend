const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RatingSchema = new Schema(
  {
    partner: {
      type: Schema.Types.ObjectId,
      ref: 'partner',
      default: null
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      default: null
    },
    rate: { type: Number }
  }
)

const Rating = mongoose.model('rating', RatingSchema)

module.exports = { Rating }
