const router = require('express').Router()

const {
  login,
  signup,
  signupPartner,
  loginPartner
} = require('../controllers/auth.controller')

router.post('/signup', signup)
router.post('/login', login)
router.post('/signuppartner', signupPartner)
router.post('/loginpartner', loginPartner)

module.exports = router
