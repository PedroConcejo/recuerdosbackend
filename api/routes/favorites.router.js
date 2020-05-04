const router = require('express').Router()

const {
  addFav,
  getMyFav,
  removeFav
} = require('../controllers/favorites.controller')

router.post('/', addFav)
router.get('/', getMyFav)
router.put('/:favid', removeFav)

module.exports = router
