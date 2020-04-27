const mongoose = require('mongoose')

const styleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user'
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'category'
    },
    description: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    price_min: {
      type: Number,
      required: true
    },
    price_max: {
      type: Number
    },
    img: [{
      type: String
    }]
  }
)

const styleModel = mongoose.model('style', styleSchema)

module.exports = styleModel
