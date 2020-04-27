const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StyleSchema = new Schema(
  {
    room: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'partner'
    },
    style: {
      type: String,
      enum: ['Bodas', 'Eventos', 'Corporativa', 'Comercial', 'Familiar', 'Retrato', 'Bautizo', 'Comunion', 'Infantil'],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at'
    }
  }
)

const Style = mongoose.model('style', StyleSchema)

module.exports = { Style }
