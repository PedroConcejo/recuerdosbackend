const router = require('express').Router()

const {
  addFav,
  getMyFav,
  removeFav,
  getMyFavDisplay
} = require('../controllers/favorites.controller')

router.post('/', addFav)
router.get('/', getMyFav)
router.get('/all', getMyFavDisplay)
router.put('/:favid', removeFav)

module.exports = router
