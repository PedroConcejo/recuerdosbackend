const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ['Bodas', 'Eventos', 'Corporativa', 'Comercial', 'Familiar', 'Retrato', 'Bautizo', 'Comunion', 'Infantil'],
      required: true
    }
  }
)

const categoryModel = mongoose.model('category', categorySchema)

module.exports = categoryModel
