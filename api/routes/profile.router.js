const router = require('express').Router()

const {
  getMe,
  updateUser,
  deleteMe
} = require('../controllers/me.controller')

router.get('/', getMe)
router.put('/', updateUser)
router.delete('/', deleteMe)

module.exports = router
