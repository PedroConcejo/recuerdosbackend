const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const meRouter = require('./me.router')
const partnersRouter = require('./partners.router')
const locationsRouter = require('./locations.router')
const categoriesRouter = require('./categories.router')

const { authUser, partnerControl } = require('../utils')

router.use('/auth', authRouter)
router.use('/users', usersRouter)
router.use('/me', authUser, meRouter)
router.use('/partners', partnersRouter)
router.use('/locations', locationsRouter)
router.use('/categories', categoriesRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(res.locals.user._id)
})

router.get('/rolecontrol', partnerControl, (req, res) => {
  res.send('Welcome Business Man')
})

module.exports = router
