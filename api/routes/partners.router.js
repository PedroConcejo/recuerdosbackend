const router = require('express').Router()

const {
  getAllPartners,
  getAllByStyles,
  getPartnerById,
  getPartnerStyles

} = require('../controllers/partners.controller')

router.get('/', getAllPartners)
router.get('/styles', getAllByStyles)
router.get('/:id', getPartnerById)
router.get('/:id/styles', getPartnerStyles)

module.exports = router
