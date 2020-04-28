const router = require('express').Router()

const {
  getAllPartners,
  getPartnerById

} = require('../controllers/partners.controller')

router.get('/', getAllPartners)
router.get('/:id', getPartnerById)

module.exports = router
