const router = require('express').Router()

const {
  createRating,
  getMyRating,
  deleteRating,
  getRating,
  updateRating
} = require('../controllers/rating.controller')

router.post('/', createRating)
router.get('/', getMyRating)
router.delete('/:ratingid', deleteRating)
router.get('/:ratingid', getRating)
router.put('/:ratingid', updateRating)

module.exports = router
