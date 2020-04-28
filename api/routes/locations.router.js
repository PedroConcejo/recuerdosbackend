const router = require('express').Router()

const {
  getAllLocations
} = require('../controllers/locations.controller')

router.get('/', getAllLocations)

module.exports = router
