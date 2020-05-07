const router = require('express').Router()

const {
  getMe,
  updateUser,
  deleteMe,
  changePassword,
  newmsg,
  clearmsg
} = require('../controllers/me.controller')

router.get('/', getMe)
router.put('/', updateUser)
router.delete('/', deleteMe)
router.put('/password', changePassword)
router.put('/newmsg/:id', newmsg)
router.put('/clearmsg', clearmsg)

module.exports = router
