
const router = require('express').Router()

const profileRouter = require('./profile.router')
const roomsRouter = require('./rooms.router')
const stylesRouter = require('./styles.router')
const ratingsRouter = require('./ratings.router')
const favoritesRouter = require('./favorites.router')

const { partnerControl } = require('../utils')

router.use('/profile', profileRouter)
router.use('/rooms', roomsRouter)
router.use('/styles', partnerControl, stylesRouter)
router.use('/ratings', ratingsRouter)
router.use('/favorites', favoritesRouter)

module.exports = router
