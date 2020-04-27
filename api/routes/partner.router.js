
const router = require('express').Router()

const {
  getAllPartner,
  getProfile,
  updatePartner,
  getPartnerById,
  createStyle,
  deleteStyle,
  newMsn
} = require('../controllers/partner.controller')

router.get('/others', getAllPartner)
router.get('/', getProfile)
router.put('/', updatePartner)
router.post('/', createStyle)
router.delete('/:styleid', deleteStyle)
router.get('/:partnerid', getPartnerById)
router.post('/:roomid', newMsn)

module.exports = router
