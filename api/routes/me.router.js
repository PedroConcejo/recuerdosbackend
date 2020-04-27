
const router = require('express').Router()

const {
  getAllPartner,
  updateUser,
  getPartnerById,
  startRoom,
  deleteRoom,
  newMsn
} = require('../controllers/me.controller')

router.get('/', getAllPartner)
router.put('/', updateUser)
router.get('/:partnerid', getPartnerById)
router.post('/:partnerid', startRoom)
router.delete('/:roomid', deleteRoom)
router.post('/:roomid', newMsn)

module.exports = router
