const CategoryModel = require('../models/category.model')
const { handleError } = require('../utils')

module.exports = {
  getAllCategories
}

function getAllCategories (req, res) {
  CategoryModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
