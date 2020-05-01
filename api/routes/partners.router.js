const router = require('express').Router()

const {
  getAllPartners,
  getAllByStyles,
  getPartnerById,
  getPartnerStyles,
  getPartnerRatings

} = require('../controllers/partners.controller')

router.get('/', getAllPartners)
router.get('/styles', getAllByStyles)
router.get('/:id', getPartnerById)
router.get('/:id/styles', getPartnerStyles)
router.get('/:id/rating', getPartnerRatings)

module.exports = router
