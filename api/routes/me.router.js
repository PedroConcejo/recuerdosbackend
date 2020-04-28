
const router = require('express').Router()

const profileRouter = require('./profile.router')
const roomsRouter = require('./rooms.router')
const stylesRouter = require('./styles.router')
const ratingsRouter = require('./ratings.router')

router.use('/profile', profileRouter)
router.use('/rooms', roomsRouter)
router.use('/styles', stylesRouter)
router.use('/ratings', ratingsRouter)

module.exports = router
