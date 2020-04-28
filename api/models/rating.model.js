const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema(
  {
    partner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    rate: {
      type: Number,
      required: true,
      min: 1,
      max: 5
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

const ratingModel = mongoose.model('rating', ratingSchema)

module.exports = ratingModel
